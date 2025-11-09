import { Rule } from '@unocss/core';
import { addUnit, toSpacing, percentToHex } from '../utils';
import { colors } from '../theme/colors';
const fontFamilyMap: Record<string, string> = {
  sans: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ].join(','),
  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif'
  ].join(','),
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace'
  ].join(',')
};
export const fontFamily: Rule[] = [
  [
    new RegExp(`^font-(sans|serif|mono)$`),
    ([, d]) => {
      return { 'font-family': fontFamilyMap[d] };
    },
    { autocomplete: [`font-(sans|serif|mono)`] }
  ]
];

export const fontSize: Rule[] = [
  [
    new RegExp(`^text-(\\d+(?:\\.\\d+)?)$`),
    ([, n], { theme }) => {
      return { 'font-size': `${addUnit(toSpacing(n, theme), theme)}` };
    },
    { autocomplete: [`text-<num>`] }
  ],
  [
    new RegExp(`^text-\[(\\d+.+)\]$`),
    ([, n]) => {
      return { 'font-size': n };
    },
    { autocomplete: [`text-[<num>(px|rpx|%)]`] }
  ]
];
export const fontStyle: Rule[] = [
  [
    new RegExp(`^font-style-(normal|italic)$`),
    ([, d]) => {
      return { 'font-style': d };
    },
    { autocomplete: [`font-style-(normal|italic)`] }
  ]
];
export const fontWeight: Rule[] = [
  [
    new RegExp(`^font-(thin|extralight|light|normal)$`),
    ([, d]) => {
      return { 'font-weight': 400 };
    },
    { autocomplete: [`font-normal`] }
  ],
  [
    new RegExp(`^font-(medium|semibold|bold|extrabold|black)$`),
    ([, d]) => {
      return { 'font-weight': 700 };
    },
    { autocomplete: [`font-bold`] }
  ],
  ['font-400', { 'font-weight': 400 }],
  ['font-700', { 'font-weight': 700 }]
];
export const letterSpacing: Rule[] = [
  [
    new RegExp(`^(-)?letter-spacing-(\d+(?:\.\d+)?)$`),
    ([, sign, n], { theme }) => {
      return {
        'letter-spacing': sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`letter-spacing-<num>`, `-letter-spacing-<num>`] }
  ],
  [
    new RegExp(`^letter-spacing-\[(\d+.+)\]$`),
    ([, n]) => {
      return { 'letter-spacing': n };
    },
    { autocomplete: [`letter-spacing-[<num>(px|rpx)]`] }
  ]
];

export const lineClamp: Rule[] = [
  [
    new RegExp(`^line-clamp-(\\d+)$`),
    ([, n]) => {
      return {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': n,
        lines: n
      };
    },
    { autocomplete: [`line-clamp-<num>`] }
  ]
];

export const lineHeight: Rule[] = [
  [
    new RegExp(`^leading-(\\d+(?:\\.\\d+)?)$`),
    ([, n], { theme }) => {
      return { 'line-height': `${addUnit(toSpacing(n, theme), theme)}` };
    },
    { autocomplete: [`leading-<num>`] }
  ],
  [
    new RegExp(`^leading-\[(\\d+(?:\\.\\d+)?)\]$`),
    ([, n]) => {
      return { 'line-height': n };
    },
    { autocomplete: [`leading-[<num>(px|rpx|em)]`] }
  ]
];

export const textAlign: Rule[] = [
  [
    new RegExp(`^text-align-(left|center|right)$`),
    ([, d]) => {
      return { 'text-align': d };
    },
    { autocomplete: [`text-align-(left|center|right)`] }
  ]
];

export const color: Rule[] = [
  ['text-transparent', { color: 'transparent' }],
  [
    new RegExp(`^text-\[(#.+)\]$`),
    ([, n]) => {
      return { color: n };
    },
    { autocomplete: [`text-[#<hex>]`] }
  ],
  [
    new RegExp(`^text-\[(rgb\(.+\))\]$`),
    ([, n]) => {
      return { color: n };
    },
    { autocomplete: [`text-[rgb(<num>,<num>,<num>)]`] }
  ],
  [
    new RegExp(`^text-\[(rgba\(.+\))\]$`),
    ([, n]) => {
      return { color: n };
    },
    { autocomplete: [`text-[rgba(<num>,<num>,<num>,<num>)]`] }
  ]
];
Object.entries(colors!).forEach(([key, value]) => {
  if (typeof value !== 'string' && value !== undefined) {
    let level = Object.keys(value);
    color.push([
      new RegExp(`^text-${key}(?:/(\\d+))?$`),
      ([, o]) => {
        return { color: value['DEFAULT'] + percentToHex(o) };
      },
      { autocomplete: [`text-${key}`, `text-${key}/<num>`] }
    ]);
    level.forEach((level) => {
      if (level === 'DEFAULT') return;
      color.push([
        new RegExp(`^text-${key}-${level}(?:/(\\d+))?$`),
        ([, o]) => {
          return { color: value[level] + percentToHex(o) };
        },
        { autocomplete: [`text-${key}-${level}`, `text-${key}-${level}/<num>`] }
      ]);
    });
  }
});
export const textDecorationLine: Rule[] = [
  ['underline', { 'text-decoration-line': 'underline' }],
  ['line-through', { 'text-decoration-line': 'line-through' }]
];

export const textOverflow: Rule[] = [
  ['ellipsis', { 'text-overflow': 'ellipsis' }],
  ['clip', { 'text-overflow': 'clip' }]
];

export const whiteSpaces: Rule[] = [
  ['normal', { 'white-space': 'normal' }],
  ['nowrap', { 'white-space': 'nowrap' }]
];
