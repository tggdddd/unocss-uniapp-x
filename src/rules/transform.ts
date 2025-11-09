import { Rule } from '@unocss/core';

//    不支持单独配置
export const transform: Rule[] = [
  [
    /^transform-\[(.+)\]$/,
    ([, v]) => {
      return { transform: v };
    },
    { autocomplete: [`transform-[<transform>]`] }
  ],

  [
    /^rotate-(\w+)$/,
    ([, v]) => {
      return { transform: `rotate(${v}deg)` };
    },
    { autocomplete: [`rotate-<deg>`] }
  ],
  [
    /^rotate-x-(\w+)$/,
    ([, v]) => {
      return { transform: `rotateX(${v}deg)` };
    },
    { autocomplete: [`rotate-x-<deg>`] }
  ],
  [
    /^rotate-y-(\w+)$/,
    ([, v]) => {
      return { transform: `rotateY(${v}deg)` };
    },
    { autocomplete: [`rotate-y-<deg>`] }
  ],
  [
    /^rotate-z-(\w+)$/,
    ([, v]) => {
      return { transform: `rotateZ(${v}deg)` };
    },
    { autocomplete: [`rotate-z-<deg>`] }
  ],

  [
    /^scale-(\w+)$/,
    ([, v]) => {
      return { transform: `scale(${v})` };
    },
    { autocomplete: [`scale-<num>`] }
  ],

  [
    /^scale-x-(\w+)$/,
    ([, v]) => {
      return { transform: `scaleX(${v})` };
    },
    { autocomplete: [`scale-x-<num>`] }
  ],
  [
    /^scale-y-(\w+)$/,
    ([, v]) => {
      return { transform: `scaleY(${v})` };
    },
    { autocomplete: [`scale-y-<num>`] }
  ],

  [
    /^translate-\[(\w+)\]$/,
    ([, v]) => {
      return { transform: `translate(${v})` };
    },
    { autocomplete: [`translate-[<translate>]`] }
  ],

  [
    /^translate-x-\[(\w+)\]$/,
    ([, v]) => {
      return { transform: `translateX(${v})` };
    },
    { autocomplete: [`translate-x-[<translate-x>]`] }
  ],
  [
    /^translate-y-\[(\w+)\]$/,
    ([, v]) => {
      return { transform: `translateY(${v})` };
    },
    { autocomplete: [`translate-y-[<translate-y>]`] }
  ]
];
