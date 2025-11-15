import type { Rule } from '@unocss/core';
import { addUnit, toSpacing } from '../utils';
import { Theme } from '../theme';
export const width: Rule<Theme>[] = [
  [
    /^(?:dark:)?(-)?w-(\d+(?:\.\d+)?)$/,
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
    /^(?:dark:)?w-\[(.+)\]$/,
    ([, n]) => {
      return { width: n };
    },
    { autocomplete: [`w-[<num>(px|rpx|%)]`] }
  ],
  ['w-auto', { width: 'auto' }],
  ['w-full', { width: '100%' }]
];

export const height: Rule<Theme>[] = [
  [
    /^(?:dark:)?(-)?h-(\d+(?:\.\d+)?)$/,
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
    /^(?:dark:)?h-\[(.+)\]$/,
    ([, n]) => {
      return { height: n };
    },
    { autocomplete: [`h-[<num>(px|rpx|%)]`] }
  ],
  ['h-auto', { height: 'auto' }],
  ['h-full', { height: '100%' }]
];
export const minWidth: Rule<Theme>[] = [
  [
    /^(?:dark:)?(-)?min-w-(\d+(?:\.\d+)?)$/,
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
    /^(?:dark:)?min-w-\[(.+)\]$/,
    ([, n]) => {
      return { 'min-width': n };
    },
    { autocomplete: [`min-w-[<num>(px|rpx|%)]`] }
  ]
];
export const minHeight: Rule<Theme>[] = [
  [
    /^(?:dark:)?(-)?min-h-(\d+(?:\.\d+)?)$/,
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
    /^(?:dark:)?min-h-\[(.+)\]$/,
    ([, n]) => {
      return { 'min-height': n };
    },
    { autocomplete: [`min-h-[<num>(px|rpx|%)]`] }
  ]
];
export const maxWidth: Rule<Theme>[] = [
  [
    /^(?:dark:)?(-)?max-w-(\d+(?:\.\d+)?)$/,
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
    /^(?:dark:)?max-w-\[(.+)\]$/,
    ([, n]) => {
      return { 'max-width': n };
    },
    { autocomplete: [`max-w-[<num>(px|rpx|%)]`] }
  ]
];
export const maxHeight: Rule<Theme>[] = [
  [
    /^(?:dark:)?(-)?max-h-(\d+(?:\.\d+)?)$/,
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
    /^(?:dark:)?max-h-\[(.+)\]$/,
    ([, sign, n]) => {
      return { 'max-height': sign ? `-${n}` : `${n}` };
    },
    { autocomplete: [`max-h-[<num>(px|rpx|%)]`] }
  ]
];
