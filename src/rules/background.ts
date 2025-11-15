import { Rule } from '@unocss/core';
import { percentToHex } from '../utils';
import { colors } from '../theme';
export const backgroundColor: Rule[] = [
  [
    new RegExp(`^(?:dark:)?bg-\\[(.+)\\]$`),
    ([, n]) => {
      return { 'background-color': n };
    },
    { autocomplete: [`bg-[any]`] }
  ]
];
Object.entries(colors!).forEach(([key, value]) => {
  if (typeof value !== 'string' && value !== undefined) {
    const level = Object.keys(value);
    backgroundColor.push([
      new RegExp(`^(?:dark:)?bg-${key}(?:/(\\d+))?$`),
      ([, o]) => {
        return { 'background-color': value['DEFAULT'] + percentToHex(o) };
      },
      { autocomplete: [`bg-${key}`, `bg-${key}/<num>`] }
    ]);
    level.forEach((level) => {
      if (level === 'DEFAULT') return;
      backgroundColor.push([
        new RegExp(`^(?:dark:)?bg-${key}-${level}(?:/(\\d+))?$`),
        ([, o]) => {
          return { 'background-color': value[level] + percentToHex(o) };
        },
        { autocomplete: [`bg-${key}-${level}`, `bg-${key}-${level}/<num>`] }
      ]);
    });
  }else{
    backgroundColor.push([
      new RegExp(`^(?:dark:)?bg-${key}(?:/(\\d+))?$`),
      ([, o]) => {
        return { 'background-color': value + percentToHex(o) };
      },
      { autocomplete: [`bg-${key}`, `bg-${key}/<num>`] }
    ]);
  }
});

backgroundColor.push([
  new RegExp(`^(?:dark:)?bg-linear-to-(t|b|l|r|tr|tl|br|bl)-(\\w+)(?:-(\\d+))?(\\/(\\d+))?-(\\w+)(?:-(\\d+))?(\\/(\\d+))?$`),
  ([, direction, fromColorName, fromLevel, , fromOpacity, toColorName, toLevel, , toOpacity]) => {
    // Helper function to resolve color values
    const resolveColor = (colorName:string, level:string, opacity:string) => {
      const color = colors?.[colorName];
      if (!color) return null;
      
      // Handle color objects with levels
      const colorValue = typeof color === 'string' 
        ? color 
        : (level ? color[level] : color.DEFAULT);
      
      if (!colorValue) return null;
      
      // Add opacity if specified
      return opacity ? `${colorValue}${percentToHex(opacity)}` : colorValue;
    };

    const startColor = resolveColor(fromColorName, fromLevel, fromOpacity);
    const endColor = resolveColor(toColorName, toLevel, toOpacity);
    
    // Validate colors
    if (!startColor || !endColor) return {};
    
    // Map direction abbreviations to full CSS values
    const directionMap :Record<string,string>= {
      t: 'top', b: 'bottom', l: 'left', r: 'right',
      tr: 'top right', tl: 'top left',
      br: 'bottom right', bl: 'bottom left'
    };
    
    const cssDirection = directionMap[direction] || 'top';
    
    return { 
      'background-image': `linear-gradient(to ${cssDirection}, ${startColor}, ${endColor})` 
    };
  },
  { 
    autocomplete: `bg-linear-to-(${['t','b','l','r','tr','tl','br','bl'].join('|')})-(${Object.keys(colors || {}).join('|')})-(${Object.keys(colors || {}).join('|')})` 
  }
]);
const dM: Record<string, string> = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
  tr: 'top right',
  tl: 'top left',
  br: 'bottom right',
  bl: 'bottom left'
};
export const backgroundImage: Rule[] = [
  ['bg-none', { 'background-image': 'none' }],
  [
    new RegExp(
      `^bg-linear-to-(t|b|l|r|tr|tl|br|bl)-((?:#[^-]+)|(?:rgb\\([^)]+\\))|(?:rgba\\([^)]+\\)))-((?:#[^-]+)|(?:rgb\\([^)]+\\))|(?:rgba\\([^)]+\\)))$`
    ),
    ([, d, fromColor, toColor]) => {
      return {
        'background-image': `linear-gradient(to ${dM[d]}, ${fromColor}, ${toColor})`
      };
    },
    { autocomplete: [`bg-linear-to-(t|b|l|r|tr|tl|br|bl)-<color>-<color>`] }
  ],
  [
    new RegExp(`^(?:dark:)?bg-image-\\[(\\w[^\\]]+)\\]$`),
    ([, n]) => {
      return { 'background-image': n.replaceAll('_', ' ') };
    },
    { autocomplete: [`bg-image-[<image>]`] }
  ],
];
