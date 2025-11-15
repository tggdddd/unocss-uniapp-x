import { Rule } from '@unocss/core';

//    不支持单独配置
export const transform: Rule[] = [
  [
    /^(?:dark:)?transform-\[(.+)\]$/,
    ([, v]) => {
      return { transform: v.replaceAll('_', ' ') };
    },
    { autocomplete: [`transform-[<transform>]`] }
  ],

  [
    /^(?:dark:)?rotate-(\w+)$/,
    ([, v]) => {
      return { transform: `rotate(${v}deg)` };
    },
    { autocomplete: [`rotate-<deg>`] }
  ],
  [
    /^(?:dark:)?rotate-x-(\w+)$/,
    ([, v]) => {
      return { transform: `rotateX(${v}deg)` };
    },
    { autocomplete: [`rotate-x-<deg>`] }
  ],
  [
    /^(?:dark:)?rotate-y-(\w+)$/,
    ([, v]) => {
      return { transform: `rotateY(${v}deg)` };
    },
    { autocomplete: [`rotate-y-<deg>`] }
  ],
  [
    /^(?:dark:)?rotate-z-(\w+)$/,
    ([, v]) => {
      return { transform: `rotateZ(${v}deg)` };
    },
    { autocomplete: [`rotate-z-<deg>`] }
  ],

  [
    /^(?:dark:)?scale-(\w+)$/,
    ([, v]) => {
      return { transform: `scale(${v})` };
    },
    { autocomplete: [`scale-<num>`] }
  ],

  [
    /^(?:dark:)?scale-x-(\w+)$/,
    ([, v]) => {
      return { transform: `scaleX(${v})` };
    },
    { autocomplete: [`scale-x-<num>`] }
  ],
  [
    /^(?:dark:)?scale-y-(\w+)$/,
    ([, v]) => {
      return { transform: `scaleY(${v})` };
    },
    { autocomplete: [`scale-y-<num>`] }
  ],

  [
    /^(?:dark:)?translate-\[(.+)\]$/,
    ([, v]) => {
      return { transform: `translate(${v})` };
    },
    { autocomplete: [`translate-[<translate>]`] }
  ],

  [
    /^(?:dark:)?translate-x-\[(.+)\]$/,
    ([, v]) => {
      return { transform: `translateX(${v})` };
    },
    { autocomplete: [`translate-x-[<translate>]`] }
  ],
  [
    /^(?:dark:)?translate-y-\[(.+)\]$/,
    ([, v]) => {
      return { transform: `translateY(${v})` };
    },
    { autocomplete: [`translate-y-[<translate>]`] }
  ]
];
