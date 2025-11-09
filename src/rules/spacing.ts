import { Rule } from '@unocss/core';
import { addUnit, toSpacing } from '../utils';
import { Theme } from '../theme';

export const padding: Rule<Theme>[] = [
  // p-t-{n}
  [
    /^(-)?p-t-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'padding-top': finalValue };
    },
    { autocomplete: ['p-t-<num>', '-p-t-<num>'] }
  ],

  // p-r-{n}
  [
    /^(-)?p-r-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'padding-right': finalValue };
    },
    { autocomplete: ['p-r-<num>', '-p-r-<num>'] }
  ],

  // p-b-{n}
  [
    /^(-)?p-b-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'padding-bottom': finalValue };
    },
    { autocomplete: ['p-b-<num>', '-p-b-<num>'] }
  ],

  // p-l-{n}
  [
    /^(-)?p-l-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'padding-left': finalValue };
    },
    { autocomplete: ['p-l-<num>', '-p-l-<num>'] }
  ],

  // p-x-{n}
  [
    /^(-)?p-x-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'padding-left': finalValue, 'padding-right': finalValue };
    },
    { autocomplete: ['p-x-<num>', '-p-x-<num>'] }
  ],

  // p-y-{n}
  [
    /^(-)?p-y-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'padding-top': finalValue, 'padding-bottom': finalValue };
    },
    { autocomplete: ['p-y-<num>', '-p-y-<num>'] }
  ],

  // p-{n}
  [
    /^(-)?p-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return {
        'padding-top': finalValue,
        'padding-right': finalValue,
        'padding-bottom': finalValue,
        'padding-left': finalValue
      };
    },
    { autocomplete: ['p-<num>', '-p-<num>'] }
  ],

  // p-t-[{value}]
  [
    /^p-t-\[(.+)\]$/,
    ([, n]) => ({ 'padding-top': n }),
    { autocomplete: ['p-t-[<value>]'] }
  ],

  // p-r-[{value}]
  [
    /^p-r-\[(.+)\]$/,
    ([, n]) => ({ 'padding-right': n }),
    { autocomplete: ['p-r-[<value>]'] }
  ],

  // p-b-[{value}]
  [
    /^p-b-\[(.+)\]$/,
    ([, n]) => ({ 'padding-bottom': n }),
    { autocomplete: ['p-b-[<value>]'] }
  ],

  // p-l-[{value}]
  [
    /^p-l-\[(.+)\]$/,
    ([, n]) => ({ 'padding-left': n }),
    { autocomplete: ['p-l-[<value>]'] }
  ],

  // p-x-[{value}]
  [
    /^p-x-\[(.+)\]$/,
    ([, n]) => ({ 'padding-left': n, 'padding-right': n }),
    { autocomplete: ['p-x-[<value>]'] }
  ],

  // p-y-[{value}]
  [
    /^p-y-\[(.+)\]$/,
    ([, n]) => ({ 'padding-top': n, 'padding-bottom': n }),
    { autocomplete: ['p-y-[<value>]'] }
  ],

  // p-[{value}]
  [
    /^p-\[(.+)\]$/,
    ([, n]) => ({
      'padding-top': n,
      'padding-right': n,
      'padding-bottom': n,
      'padding-left': n
    }),
    { autocomplete: ['p-[<value>]'] }
  ]
];

export const margin: Rule<Theme>[] = [
  // m-t-{n}
  [
    /^(-)?m-t-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'margin-top': finalValue };
    },
    { autocomplete: ['m-t-<num>', '-m-t-<num>'] }
  ],

  // m-r-{n}
  [
    /^(-)?m-r-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'margin-right': finalValue };
    },
    { autocomplete: ['m-r-<num>', '-m-r-<num>'] }
  ],

  // m-b-{n}
  [
    /^(-)?m-b-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'margin-bottom': finalValue };
    },
    { autocomplete: ['m-b-<num>', '-m-b-<num>'] }
  ],

  // m-l-{n}
  [
    /^(-)?m-l-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'margin-left': finalValue };
    },
    { autocomplete: ['m-l-<num>', '-m-l-<num>'] }
  ],

  // m-x-{n}
  [
    /^(-)?m-x-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'margin-left': finalValue, 'margin-right': finalValue };
    },
    { autocomplete: ['m-x-<num>', '-m-x-<num>'] }
  ],

  // m-y-{n}
  [
    /^(-)?m-y-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return { 'margin-top': finalValue, 'margin-bottom': finalValue };
    },
    { autocomplete: ['m-y-<num>', '-m-y-<num>'] }
  ],

  // m-{n}
  [
    /^(-)?m-(\d+(?:\.\d+)?)$/,
    ([, sign, n], { theme }) => {
      const spacingValue = addUnit(toSpacing(n, theme), theme);
      const finalValue = sign ? `-${spacingValue}` : spacingValue;
      return {
        'margin-top': finalValue,
        'margin-right': finalValue,
        'margin-bottom': finalValue,
        'margin-left': finalValue
      };
    },
    { autocomplete: ['m-<num>', '-m-<num>'] }
  ],

  // m-t-[{value}]
  [
    /^m-t-\[(.+)\]$/,
    ([, n]) => ({ 'margin-top': n }),
    { autocomplete: ['m-t-[<value>]'] }
  ],

  // m-r-[{value}]
  [
    /^m-r-\[(.+)\]$/,
    ([, n]) => ({ 'margin-right': n }),
    { autocomplete: ['m-r-[<value>]'] }
  ],

  // m-b-[{value}]
  [
    /^m-b-\[(.+)\]$/,
    ([, n]) => ({ 'margin-bottom': n }),
    { autocomplete: ['m-b-[<value>]'] }
  ],

  // m-l-[{value}]
  [
    /^m-l-\[(.+)\]$/,
    ([, n]) => ({ 'margin-left': n }),
    { autocomplete: ['m-l-[<value>]'] }
  ],

  // m-x-[{value}]
  [
    /^m-x-\[(.+)\]$/,
    ([, n]) => ({ 'margin-left': n, 'margin-right': n }),
    { autocomplete: ['m-x-[<value>]'] }
  ],

  // m-y-[{value}]
  [
    /^m-y-\[(.+)\]$/,
    ([, n]) => ({ 'margin-top': n, 'margin-bottom': n }),
    { autocomplete: ['m-y-[<value>]'] }
  ],

  // m-[{value}]
  [
    /^m-\[(.+)\]$/,
    ([, n]) => ({
      'margin-top': n,
      'margin-right': n,
      'margin-bottom': n,
      'margin-left': n
    }),
    { autocomplete: ['m-[<value>]'] }
  ]
];
