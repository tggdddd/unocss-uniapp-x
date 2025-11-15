import { Rule } from '@unocss/core';
import { addUnit, toSpacing } from '../utils';
import { Theme } from '../theme';
export const flexBasis: Rule<Theme>[] = [
  ['basis-full', { 'flex-basis': '100%' }],
  ['basis-auto', { 'flex-basis': 'auto' }]
];
export const flexDirection: Rule[] = [
  ['flex-row', { 'flex-direction': 'row' }],
  ['flex-col', { 'flex-direction': 'column' }],
  ['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
  ['flex-col-reverse', { 'flex-direction': 'column-reverse' }]
];
export const flexWrap: Rule<Theme>[] = [
  ['flex-wrap', { 'flex-wrap': 'wrap' }],
  ['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
  ['flex-nowrap', { 'flex-wrap': 'nowrap' }]
];
export const flex: Rule<Theme>[] = [
  ['flex-auto', { flex: '1 1 auto' }],
  ['flex-initial', { flex: '0 1 auto' }],
  ['flex-none', { flex: 'none' }],
  ['flex-1', { flex: '1 1 0' }],
  [
    /^(?:dark:)?(?:flex-)?shrink(?:-(.*))?$/,
    ([, d = '']) => ({ 'flex-shrink': d ?? 1 }),
    { autocomplete: ['flex-shrink-<num>', 'shrink-<num>'] }
  ],
  [
    /^(?:dark:)?(?:flex-)?grow(?:-(.*))?$/,
    ([, d = '']) => ({ 'flex-grow': d ?? 1 }),
    { autocomplete: ['flex-grow-<num>', 'grow-<num>'] }
  ],
  [
    /^(?:dark:)?(?:flex-)?basis-(\d+(?:\.\d+))$/,
    ([, n], { theme }) => {
        return { 'flex-basis': `${addUnit(toSpacing(n, theme), theme)}` };
    },
    {
      autocomplete: [
        `basis-<num>`,
        'flex-basis-<num>'
      ]
    }
  ],
  [
    /^(?:dark:)?(?:flex-)?basis-\[.+\]$/,
    ([, n]) => {
        return { 'flex-basis': n };
    },
    {
      autocomplete: [
        `basis-[<num>]`,
        'flex-basis-[<num>]'
      ]
    }
  ],
  [
    /^(?:dark:)?(?:flex-)?basis-(\d+(?:\.\d+)?(rpx|px|%)?)$/,
    ([, n, unit], { theme }) => {
      if (!unit) {
        return { 'flex-basis': `${addUnit(toSpacing(n, theme), theme)}` };
      }
      return { 'flex-basis': `${n}${unit}` };
    },
    {
      autocomplete: [
        'basis-<num>-(px|rpx|%)',
        `basis-<num>`,
        'flex-basis-<num>-(px|rpx|%)',
        'flex-basis-<num>'
      ]
    }
  ]
];
export const justifyContent: Rule[] = [
  ['justify-center', { 'justify-content': 'center' }],
  ['justify-start', { 'justify-content': 'flex-start' }],
  ['justify-end', { 'justify-content': 'flex-end' }],
  ['justify-between', { 'justify-content': 'space-between' }],
  ['justify-around', { 'justify-content': 'space-around' }],
  ['justify-evenly', { 'justify-content': 'space-evenly' }]
];
export const alignContent: Rule[] = [
  ['content-center', { 'align-content': 'center' }],
  ['content-start', { 'align-content': 'flex-start' }],
  ['content-end', { 'align-content': 'flex-end' }],
  ['content-between', { 'align-content': 'space-between' }],
  ['content-around', { 'align-content': 'space-around' }],
  ['content-stretch', { 'align-content': 'stretch' }]
];
export const alignItems: Rule[] = [
  ['items-center', { 'align-items': 'center' }],
  ['items-start', { 'align-items': 'flex-start' }],
  ['items-end', { 'align-items': 'flex-end' }],
  ['items-stretch', { 'align-items': 'stretch' }]
];
export const alignSelf: Rule[] = [
  ['self-center', { 'align-self': 'center' }],
  ['self-start', { 'align-self': 'flex-start' }],
  ['self-end', { 'align-self': 'flex-end' }],
  ['self-stretch', { 'align-self': 'stretch' }],
  ['self-auto', { 'align-self': 'auto' }]
];
