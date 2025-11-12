import { Rule } from '@unocss/core';

// 不适合统一定义，需要根据具体情况进行配置
export const boxShadow: Rule[] = [
  [
    new RegExp(`^(?:dark:)?shadow-\\[(.+)\\]$`),
    ([, n]) => {
      return { 'box-shadow': n.replaceAll('_', ' ') };
    },
    { autocomplete: [`box-shadow-[<box-shadow>]`] }
  ]
];

export const textShadow: Rule[] = [
  [
    new RegExp(`^(?:dark:)?text-shadow-\\[(.+)\\]$`),
    ([, n]) => {
      return { 'text-shadow': n.replaceAll('_', ' ') };
    },
    { autocomplete: [`text-shadow-[<text-shadow>]`] }
  ]
];

export const opacity: Rule[] = [
  [
    new RegExp(`^(?:dark:)?opacity-(\\d+)$`),
    ([, n]) => {
      return { opacity: Number(n) / 100 };
    },
    { autocomplete: [`opacity-<num>`] }
  ],
  [
    new RegExp(`^(?:dark:)?opacity-\\[(.+)\\]$`),
    ([, n]) => {
      return { opacity: n };
    },
    { autocomplete: [`opacity-[<opacity>]`] }
  ]
];
