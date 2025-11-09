import type { Rule } from '@unocss/core';
import { addUnit, toSpacing } from '../utils';

export const boxSizing: Rule[] = [
  ['box-border', { 'box-sizing': 'border-box' }],
  ['box-content', { 'box-sizing': 'content-box' }]
];
export const display: Rule[] = [
  ['flex', { display: 'flex' }],
  ['none', { display: 'none' }]
];
export const overflow: Rule[] = [
  ['overflow-visible', { overflow: 'visible' }],
  ['overflow-hidden', { overflow: 'hidden' }],
  ['overflow-x-visible', { 'overflow-x': 'visible' }],
  ['overflow-x-hidden', { 'overflow-x': 'hidden' }],
  ['overflow-y-visible', { 'overflow-y': 'visible' }],
  ['overflow-y-hidden', { 'overflow-y': 'hidden' }]
];

export const position: Rule[] = [
  ['relative', { position: 'relative' }],
  ['absolute', { position: 'absolute' }],
  ['fixed', { position: 'fixed' }]
];
export const inset: Rule[] = [
  [
    /^(-)?(top|right|bottom|left)-(\d+(?:\.\d+)?)$/,
    ([, sign, d, n], { theme }) => {
      return {
        [d]: sign
          ? `-${addUnit(toSpacing(n, theme), theme)}`
          : `${addUnit(toSpacing(n, theme), theme)}`
      };
    },
    {
      autocomplete: [
        `(top|right|bottom|left)-<num>`,
        `-(top|right|bottom|left)-<num>`
      ]
    }
  ],

  [
    /^(top|right|bottom|left)-\[(.+)\]$/,
    ([, d, n]) => {
      return { [d]: n };
    },
    { autocomplete: [`(top|right|bottom|left)-[<num>(px|rpx|%)]`] }
  ],

  [
    /^(-)?(?:top|right|bottom|left)-full$/,
    ([, sign, d]) => {
      return { [d]: sign ? '-100%' : '100%' };
    },
    {
      autocomplete: [
        `(top|right|bottom|left)-full`,
        `-(top|right|bottom|left)-full`
      ]
    }
  ]
];
export const visible: Rule[] = [
  ['visible', { visibility: 'visible' }],
  ['hidden', { visibility: 'hidden' }]
];
export const zindex: Rule[] = [
  [
    /^(-)?z-(\d+)$/,
    ([, sign, d]) => {
      return { 'z-index': sign ? `-${d}` : `${d}` };
    },
    { autocomplete: [`z-index-<num>`] }
  ]
];
