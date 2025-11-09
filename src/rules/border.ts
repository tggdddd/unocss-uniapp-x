import { Rule } from '@unocss/core';
import { addUnit, toSpacing, percentToHex } from '../utils';
import { colors } from '../theme/colors';

const borderRadiusMap: Record<string, string> = {
  tr: 'top-right',
  tl: 'top-left',
  br: 'bottom-right',
  bl: 'bottom-left'
};
export const borderRadius: Rule[] = [
  [
    /^rounded(?:-(tr|tl|br|bl))?-(\d+(?:\.\d+)?)$/,
    ([, d, n], { theme }) => {
      if (d) {
        return {
          ['border-' + borderRadiusMap[d] + '-radius']:
            `${addUnit(toSpacing(n, theme), theme)}`
        };
      }
      return { 'border-radius': `${addUnit(toSpacing(n, theme), theme)}` };
    },
    { autocomplete: [`rounded-<num>`, `rounded-(tr|tl|br|bl)-<num>`] }
  ],
  [
    /^rounded(?:-(tr|tl|br|bl))?-\[(.+)\]$/,
    ([, d, n], { theme }) => {
      if (d) {
        return {
          ['border-' + borderRadiusMap[d] + '-radius']:
            `${addUnit(toSpacing(n, theme), theme)}`
        };
      }
      return { 'border-radius': n };
    },
    {
      autocomplete: [
        `rounded-[<num>(px|rpx)]`,
        `rounded-(tr|tl|br|bl)-[<num>(px|rpx)]`
      ]
    }
  ],
  ['rounded-none', { 'border-radius': '0' }],
  ['rounded-full', { 'border-radius': '9999px' }]
];

const borderWidthMap: Record<string, string[]> = {
  t: ['top'],
  b: ['bottom'],
  l: ['left'],
  r: ['right'],
  x: ['left', 'right'],
  y: ['top', 'bottom']
};
export const borderWidth: Rule[] = [
  [
    /^border(?:-(t|b|l|r|y|x))?-(\d+(?:\.\d+)?)$/,
    ([, d, n], { theme }) => {
      if (d) {
        const border = borderWidthMap[d];
        const css: Record<string, string> = {};
        border.forEach((item) => {
          css['border-' + item + '-width'] =
            `${addUnit(toSpacing(n, theme), theme)}`;
        });
        return css;
      }
      return { 'border-width': `${addUnit(toSpacing(n, theme), theme)}` };
    },
    { autocomplete: [`border-<num>`, `border-(t|b|l|r|y|x)-<num>`] }
  ],
  [
    /^border(?:-(t|b|l|r))?-\[(\d+.+)\]$/,
    ([, d, n]) => {
      if (d) {
        const border = borderWidthMap[d];
        const css: Record<string, string> = {};
        border.forEach((item) => {
          css['border-' + item + '-width'] = n;
        });
        return css;
      }
      return { 'border-width': n };
    },
    {
      autocomplete: [
        `border-[<num>(px|rpx)]`,
        `border-(t|b|l|r)-[<num>(px|rpx)]`
      ]
    }
  ]
];

const createBorderColorRules = (): Rule[] => {
  const rules: Rule[] = [
    [
      /^border(?:-(t|b|l|r|y|x))?-\[(#.+)]$/,
      ([, d, n]) => {
        if (d) {
          const border = borderWidthMap[d];
          const css: Record<string, string> = {};
          border.forEach((item) => {
            css['border-' + item + '-color'] = n;
          });
          return css;
        }
        return { 'border-color': n };
      },
      { autocomplete: [`border-[#<hex>]`] }
    ],
    [
      /^border(?:-(t|b|l|r|y|x))?-\[(rgb\(.+\))\]$/,
      ([, d, n]) => {
        if (d) {
          const border = borderWidthMap[d];
          const css: Record<string, string> = {};
          border.forEach((item) => {
            css['border-' + item + '-color'] = n;
          });
          return css;
        }
        return { 'border-color': n };
      },
      { autocomplete: [`border-[rgb(<num>,<num>,<num>)]`] }
    ],
    [
      /^bg-\[(rgba\(.+\))\]$/,
      ([, n]) => {
        return { 'background-color': n };
      },
      { autocomplete: [`bg-[rgba(<num>,<num>,<num>,<num>)]`] }
    ]
  ];

  Object.entries(colors!).forEach(([key, value]) => {
    if (typeof value !== 'string' && value !== undefined) {
      const level = Object.keys(value);
      rules.push([
        new RegExp(`^border(?:-(t|b|l|r|y|x))?-${key}(?:@(\\d+))?$`),
        ([, o]) => {
          return { 'border-color': value['DEFAULT'] + percentToHex(o) };
        },
        { autocomplete: [`border-${key}`, `border-${key}@<num>`] }
      ]);
      level.forEach((level) => {
        if (level === 'DEFAULT') return;
        rules.push([
          new RegExp(`^border(?:-(t|b|l|r|y|x))?-${key}-${level}(?:@(\\d+))?$`),
          ([, o]) => {
            return { 'border-color': value[level] + percentToHex(o) };
          },
          {
            autocomplete: [
              `border-${key}-${level}`,
              `border-${key}-${level}@<num>`
            ]
          }
        ]);
      });
    }
  });

  return rules;
};

export const borderColor: Rule[] = createBorderColorRules();

export const borderStyle: Rule[] = [
  [
    /^border(?:-(t|b|l|r|y|x))?-(solid|dashed|dotted)$/,
    ([, d]) => {
      return { 'border-style': d };
    },
    {
      autocomplete: [
        `border-solid`,
        `border-dashed`,
        `border-dotted`,
        `border-(t|b|l|r|y|x)-solid`,
        `border-(t|b|l|r|y|x)-dashed`,
        `border-(t|b|l|r|y|x)-dotted`
      ]
    }
  ]
];
