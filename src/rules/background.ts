import { Rule } from '@unocss/core';
import { percentToHex } from '../utils';
import { colors } from '../theme/colors';

export const backgroundColor: Rule[] = [
  [
    new RegExp(`^bg-\[(#.+)]$`),
    ([, n]) => {
      return { 'background-color': n };
    },
    { autocomplete: [`bg-[#<hex>]`] }
  ],
  [
    new RegExp(`^bg-\[(rgb\(.+))\]$`),
    ([, n]) => {
      return { 'background-color': n };
    },
    { autocomplete: [`bg-[rgb(<num>,<num>,<num>)]`] }
  ],
  [
    new RegExp(`^bg-\[(rgba\(.+))\]$`),
    ([, n]) => {
      return { 'background-color': n };
    },
    { autocomplete: [`bg-[rgba(<num>,<num>,<num>,<num>)]`] }
  ]
];
Object.entries(colors!).forEach(([key, value]) => {
  if (typeof value !== 'string' && value !== undefined) {
    const level = Object.keys(value);
    backgroundColor.push([
      new RegExp(`^bg-${key}(?:@(\\d+))?$`),
      ([, o]) => {
        return { 'background-color': value['DEFAULT'] + percentToHex(o) };
      },
      { autocomplete: [`bg-${key}`, `bg-${key}@<num>`] }
    ]);
    level.forEach((level) => {
      if (level === 'DEFAULT') return;
      backgroundColor.push([
        new RegExp(`^bg-${key}-${level}(?:@(\\d+))?$`),
        ([, o]) => {
          return { 'background-color': value[level] + percentToHex(o) };
        },
        { autocomplete: [`bg-${key}-${level}`, `bg-${key}-${level}@<num>`] }
      ]);
    });
  }
});
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
      `^bg-linear-to-(t|b|l|r|tr|tl|br|bl)-((?:#.+)(?:rgb\(.+))(?:rgba\(.+)))-((?:#.+)(?:rgb\(.+))(?:rgba\(.+)))$`
    ),
    ([, d, fromColor, toColor]) => {
      return {
        'background-image': `linear-gradient(to ${dM[d]}, ${fromColor}, ${toColor})`
      };
    },
    { autocomplete: [`bg-linear-to-(t|b|l|r|tr|tl|br|bl)-<color>-<color>`] }
  ]
];
