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
    /(?:dark:)?^rounded(?:-(tr|tl|br|bl))?-(\d+(?:\.\d+)?)$/,
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
    /(?:dark:)?^rounded(?:-(tr|tl|br|bl))?-\[(.+)\]$/,
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
    /(?:dark:)?^border(?:-(t|b|l|r|y|x))?-(\d+(?:\.\d+)?)$/,
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
    /(?:dark:)?^border(?:-(t|b|l|r))?-\[(\d+.*)\]$/,
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
      /(?:dark:)?^border(?:-(t|b|l|r|y|x))?-\[(#.+)]$/,
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
      /(?:dark:)?^border(?:-(t|b|l|r|y|x))?-\[(rgb\(.+\))\]$/,
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
      /(?:dark:)?^border(?:-(t|b|l|r|y|x))?-\[(rgba\(.+\))\]$/,
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
      { autocomplete: [`border-[rgba(<num>,<num>,<num>,<num>)]`] }
    ]
  ];

  Object.entries(colors!).forEach(([key, value]) => {
    if (typeof value !== 'string' && value !== undefined) {
      const level = Object.keys(value);
      rules.push([
        new RegExp(`^(?:dark:)?border(?:-(t|b|l|r|y|x))?-${key}(?:/(\\d+))?$`),
        ([,d, o]) => {
          if (d) {
            const border = borderWidthMap[d];
            const css: Record<string, string> = {};
            border.forEach((item) => {
              css['border-' + item + '-color'] = value['DEFAULT'] + percentToHex(o);
            });
            return css;
          }
          return { 'border-color': value['DEFAULT'] + percentToHex(o) };
        },
        { autocomplete: [`border-${key}`, `border-${key}/<opacity>`, `border-y-${key}/<opacity>`, `border-x-${key}/<opacity>`, `border-t-${key}/<opacity>`, `border-b-${key}/<opacity>`, `border-l-${key}/<opacity>`, `border-r-${key}/<opacity>`] }
      ]);
      level.forEach((level) => {
        if (level === 'DEFAULT') return;
        rules.push([
          new RegExp(`^(?:dark:)?border(?:-(t|b|l|r|y|x))?-${key}-${level}(?:/(\\d+))?$`),
          ([,d, o]) => {
            if (d) {
              const border = borderWidthMap[d];
              const css: Record<string, string> = {};
              border.forEach((item) => {
                css['border-' + item + '-color'] = value[level] + percentToHex(o);
              });
              return css;
            }
            return { 'border-color': value[level] + percentToHex(o) };
          },
          {
            autocomplete: [
              `border-${key}-${level}`,
              `border-${key}-${level}/<opacity>`,
              `border-y-${key}-${level}/<opacity>`,
              `border-x-${key}-${level}/<opacity>`,
              `border-t-${key}-${level}/<opacity>`,
              `border-b-${key}-${level}/<opacity>`,
              `border-l-${key}-${level}/<opacity>`,
              `border-r-${key}-${level}/<opacity>`
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
    /(?:dark:)?^border(?:-(t|b|l|r|y|x))?-(solid|dashed|dotted)$/,
    ([, d, n]) => {
      if (d) {
        const border = borderWidthMap[d];
        const css: Record<string, string> = {};
        border.forEach((item) => {
          css['border-' + item + '-style'] = n;
        });
        return css;
      }
      return { 'border-style': n };
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
