import { definePreset, type PresetOptions } from '@unocss/core';
import { transformEscapESelector } from './transformers/transform-class/utils';
import * as theme from './theme';
import * as rules from './rules';
import transformerClass from './transformers/index';
import type { Theme } from './theme';
import { autoAdapt } from './adapt';
const defaultRules = {
  '.': '_dl_',
  '/': '_sl_',
  ':': '_cl_',
  '%': '_pes_',
  '!': '_el_',
  '#': '_wn_',
  '(': '_lbl_',
  ')': '_lbr_',
  '[': '_lfl_',
  ']': '_lfr_',
  $: '_do_',
  ',': '_lco_',
  '=': '_eqe_',
  '+': '_plus_',
  '*': '_star_'
};

export interface PresetUniAppXOptions extends PresetOptions, Theme {}
export const presetUniAppX = definePreset((options: PresetOptions = {}) => {
  options.preflight = options.preflight ?? true;
  options.transformRules = options.transformRules ?? defaultRules;
  options.whRpx = options.whRpx ?? true;
  options.transformer = options.transformer ?? [];
  return {
    name: 'unocss-uni-app-x',
    theme: {
      ...theme,
      transformRules: options.transformRules,
      numUnit: options.numUnit,
      numScale: options.numScale
    },
    rules: Object.values(rules).flat(),
    options,
    postprocess(css) {
      // 是否转义class
      if (options.transformClass)
        css.selector = transformEscapESelector(
          css.selector,
          options.transformRules
        );
    },
    transformers: options.transformClass ? [transformerClass(options)] : []
  };
});
autoAdapt();
export default presetUniAppX;
