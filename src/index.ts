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
      numScale: options.numScale,
      transistionProperty:options.transistionProperty??'all',
      transistionDuration:options.transistionDuration??'150ms',
      transistionTimingFunction:options.transistionTimingFunction??'ease',
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
    transformers: options.transformClass ? [transformerClass(options)] : [],
    autocomplete:{
      templates:[],
      shorthands:{
        opacity:['0','10','20','30','40','50','60','70','80','90','100'],
        hex:['000000','999999','aaaaaa','ffffff'],
        color:['#aaaaaa','rgba(0,0,0,0)','rgb(0,0,0)'],
        number:['1','2','3','4','5','6','7','8','9','0'],
        image:['linear-gradient'],
        'box-shadow':['0 0 0 0 rgba(0,0,0,0)'],
        'text-shadow':['0 0 0 rgba(0,0,0,0)'],
        'deg':['0deg','45deg','90deg','135deg','180deg','225deg','270deg','315deg','360deg'],
        'translate':['1px','1%','1rpx'],
        'transform':['transform'],
      },
      extractors:[ ]
    }
  };
});
autoAdapt();
export default presetUniAppX;
