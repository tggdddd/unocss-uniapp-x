import type { Arrayable } from '@unocss/core';

export interface Colors {
  [key: string]: (Colors & { DEFAULT?: string }) | string;
}

export interface Theme {
  colors?: Colors;
  // 小程序转义class 自定义转换规则
  transformRules?: Record<string, string>;
  // 小程序转义class 开关
  transformClass?: boolean;
  // 默认单位 px | rpx
  numUnit?: 'px' | 'rpx';
  // 尺寸换算 默认单位的数字换算
  numScale?: number;
}
