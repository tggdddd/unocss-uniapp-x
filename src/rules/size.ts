import type { Rule } from '@unocss/core';
import { addUnit, toSpacing } from '../utils';
import { Theme } from '../theme';
export const width: Rule<Theme>[] = [
  [
    /^(-)?w-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      return {
        width: sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`w-<num>`, `-w-<num>`] }
  ],
  [
    /^w-\[(.+)\]$/,
    ([, sign, n]) => {
      return { width: sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`w-[<num>(px|rpx|%)]`] }
  ],
  ['w-auto', { width: 'auto' }],
  ['w-full', { width: '100%' }]
];

export const height: Rule<Theme>[] = [
  [
    /^(-)?h-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      return {
        height: sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`h-<num>`, `-h-<num>`] }
  ],
  [
    /^h-\[(.+)\]$/,
    ([, sign, n]) => {
      return { height: sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`h-[<num>(px|rpx|%)]`] }
  ],
  ['h-auto', { height: 'auto' }],
  ['h-full', { height: '100%' }]
];
export const minWidth: Rule<Theme>[] = [
  [
    /^(-)?min-w-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      return {
        'min-width': sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`min-w-<num>`, `-min-w-<num>`] }
  ],
  [
    /^min-w-\[(.+)\]$/,
    ([, sign, n]) => {
      return { 'min-width': sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`min-w-[<num>(px|rpx|%)]`] }
  ]
];
export const minHeight: Rule<Theme>[] = [
  [
    /^(-)?min-h-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      return {
        'min-height': sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`min-h-<num>`, `-min-h-<num>`] }
  ],
  [
    /^min-h-\[(.+)\]$/,
    ([, sign, n]) => {
      return { 'min-height': sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`min-h-[<num>(px|rpx|%)]`] }
  ]
];
export const maxWidth: Rule<Theme>[] = [
  [
    /^(-)?max-w-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      return {
        'max-width': sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`max-w-<num>`, `-max-w-<num>`] }
  ],
  [
    /^max-w-\[(.+)\]$/,
    ([, sign, n]) => {
      return { 'max-width': sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`max-w-[<num>(px|rpx|%)]`] }
  ]
];
export const maxHeight: Rule<Theme>[] = [
  [
    /^(-)?max-h-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      return {
        'max-height': sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    { autocomplete: [`max-h-<num>`, `-max-h-<num>`] }
  ],
  [
    /^max-h-\[(.+)\]$/,
    ([, sign, n]) => {
      return { 'max-height': sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`max-h-[<num>(px|rpx|%)]`] }
  ]
];
