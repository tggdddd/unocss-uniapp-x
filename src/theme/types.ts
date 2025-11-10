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
  // 是否启用暗色模式  parent|near|none|both
  darkEnable?:'parent'|'near'|'none'|'both'

  // 暗色模式类名 
  darkClass?:string

  // 暗色模式类名前缀 如 dark 即 dark:text-white
  darkVariant?:string
}
