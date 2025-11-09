import { Rule } from '@unocss/core';
import { addUnit, toSpacing } from '../utils';
import { Theme } from '../theme';

type SpacingProps = { [key: string]: string };

const createSpacingRule = (
  prefix: string,
  directions: { [key: string]: string[] }
): Rule<Theme>[] => {
  const rules: Rule<Theme>[] = [];

  // Numeric rules with optional negative sign
  Object.entries(directions).forEach(([suffix, props]) => {
    rules.push([
      new RegExp(`^(-)?${prefix}-${suffix.length==0?'':(suffix+'-')}(\\d+(?:\\.\\d+)?)$`),
      ([, sign, n], { theme }) => {
        const spacingValue = addUnit(toSpacing(n, theme), theme);
        const finalValue = sign ? `-${spacingValue}` : spacingValue;
        return props.reduce((acc, prop) => ({ ...acc, [prop]: finalValue }), {} as SpacingProps);
      },
      { autocomplete: [`${prefix}-${suffix.length==0?'':(suffix+'-')}<num>`, `-${prefix}-${suffix.length==0?'':(suffix+'-')}<num>`] }
    ]);
  });
  if(prefix=='m'){
    Object.entries(directions).forEach(([suffix, props]) => {
      rules.push([
        new RegExp(`^${prefix}-${suffix.length==0?'':(suffix+'-')}auto$`),
        ([, ]) => {
          const spacingValue = 'auto';
          return props.reduce((acc, prop) => ({ ...acc, [prop]: spacingValue }), {} as SpacingProps);
        },
        { autocomplete: [`${prefix}-${suffix.length==0?'':(suffix+'-')}auto`] }
      ]);
    });
  }

  // Arbitrary value rules
  Object.entries(directions).forEach(([suffix, props]) => {
    rules.push([
      new RegExp(`^${prefix}-${suffix.length==0?'':(suffix+'-')}\\[(.+)\\]$`),
      ([, n]) => props.reduce((acc, prop) => ({ ...acc, [prop]: n }), {} as SpacingProps),
      { autocomplete: [`${prefix}-${suffix.length==0?'':(suffix+'-')}[<value>]`] }
    ]);
  });

  return rules;
};

const paddingDirections = {
  't': ['padding-top'],
  'r': ['padding-right'],
  'b': ['padding-bottom'],
  'l': ['padding-left'],
  'x': ['padding-left', 'padding-right'],
  'y': ['padding-top', 'padding-bottom'],
  '': ['padding']
};

const marginDirections = {
  't': ['margin-top'],
  'r': ['margin-right'],
  'b': ['margin-bottom'],
  'l': ['margin-left'],
  'x': ['margin-left', 'margin-right'],
  'y': ['margin-top', 'margin-bottom'],
  '': ['margin']
};

export const padding: Rule<Theme>[] = createSpacingRule('p', paddingDirections);
export const margin: Rule<Theme>[] = createSpacingRule('m', marginDirections);
