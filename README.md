# unocss-uniapp-x

<p align="center">
  <img src="https://img.shields.io/npm/v/unocss-uniapp-x" alt="npm version">
  <img src="https://img.shields.io/npm/l/unocss-uniapp-x" alt="license">
  <img src="https://img.shields.io/npm/dm/unocss-uniapp-x" alt="downloads">
</p>

> 🎨 UnoCSS preset for uni-app-x - 为 uni-app-x 提供原子化 CSS 支持

## 🔗 仓库地址

GitHub: https://github.com/tggdddd/unocss-uniapp-x.git

## ✨ 特性

- 🚀 **专为 uni-app-x 设计** - 完美支持 `.uvue` 文件格式
- 🎯 **自动适配** - 自动修改 `@unocss/vite` 以支持 `.uvue` 文件
- 💪 **完整的 CSS 规则** - 包含布局、间距、排版、边框、背景、效果、变换、过渡等
- 🔧 **灵活配置** - 支持自定义转换规则、单位、缩放等
- 📦 **开箱即用** - 预设了常用的样式规则和主题配置
- 🎨 **类名转换** - 支持特殊字符转义，确保在 uni-app-x 中正常使用

## 📦 安装

```bash
npm install unocss-uniapp-x @unocss/core @unocss/vite -D
```

或使用 pnpm:

```bash
pnpm add unocss-uniapp-x @unocss/core @unocss/vite -D
```

或使用 yarn:

```bash
yarn add unocss-uniapp-x @unocss/core @unocss/vite -D
```

## 🚀 快速开始

### 基础配置

在你的 `vite.config.ts` 中配置 UnoCSS:

```typescript
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni';
import UnoCSS from '@unocss/vite'
import presetUniAppX from 'unocss-uniapp-x'

export default defineConfig(async () => {
	const UnoCSS = await import('unocss/vite').then(i => i.default)
	return {
		root:__dirname,
		plugins: [
			uni(),
			UnoCSS({
        mode: "vue-scoped",
			  transformCSS: "pre",
      })
    ]
	}
})
```

### 完整配置示例

```typescript
import presetUniAppX from 'unocss-uniapp-x'

export default {
  // 内容配置
  content: {
    filesystem: ["pipeline"],
    pipeline: {
      include: [/\.(uvue)($|\?)/],
      exclude: [/\.(css|postcss|sass|scss|less|stylus|styl|uts)($|\?)/],
    }
  },
  presets: [
    presetUniAppX({
      // 包含 .uvue 文件
      include: [/\.(uvue)($|\?)/],
      
      // 启用类名转换
      transformClass: true,
      // 数字单位
      numUnit:'px',
      // 数字缩放比例
      numScale:1,
      // 启用类标签
      classTags: true
    })
  ],
}
```

## 📖 使用方法

在 `.uvue` 文件中直接使用 UnoCSS 类名:

```vue
<template>
  <view class="flex flex-col items-center justify-center bg-gray-100">
    <text class="text-12 font-bold text-blue-500 mb-4">Hello uni-app-x!</text>
    <view class="w-200 h-100 bg-white rounded-12 p-4">
      <text class="text-gray-700 text-[12px]">这是一个使用 UnoCSS 的示例</text>
    </view>
  </view>
</template>
```

## 🧩 编辑器插件与类名自动完成（推荐）

为获得更好的开发体验（类名自动完成、悬浮预览与诊断），建议安装 UnoCSS 的编辑器插件：

- VS Code：安装扩展 "UnoCSS"（[Marketplace 链接](https://marketplace.visualstudio.com/items?itemName=antfu.unocss))
- JetBrains 系列（WebStorm、IntelliJ 等）：安装插件 "UnoCSS"（[JetBrains Marketplace 链接](https://plugins.jetbrains.com/plugin/22288-unocss))

如果你在使用 `.uvue` 文件，建议在 VS Code 中将其关联为 Vue 文件以获得更佳的语法高亮与插件支持：

```jsonc
// .vscode/settings.json 或 用户设置中添加
{
  "files.associations": {
    "*.uvue": "vue"
  }
}
```

安装并重启编辑器后，即可在 `.uvue` 中获得 UnoCSS 类名的智能补全与提示。

## ⚙️ 配置选项

### PresetUniAppXOptions

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `preflight` | `boolean` | `true` | 是否启用预设样式 |
| `transformClass` | `boolean` | `false` | 是否转换类名中的特殊字符 |
| `transformRules` | `object` | 见下方 | 类名转换规则 |
| `numUnit` | `string` | `px` | 数字单位 |
| `numScale` | `number` | `1` | 数字缩放比例 |

### 默认转换规则

```typescript
{
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
  '$': '_do_',
  ',': '_lco_',
  '=': '_eqe_',
  '+': '_plus_',
  '*': '_star_'
}
```

## 🎨 规则示例

下列为预设内置的原子类规则示例，数值类支持纯数字（按 `theme.numUnit` 与 `numScale` 转换）与 `[]` 自定义值（原样输出）。

### 布局（layout.ts）
- Box Sizing
  - `box-border` → box-sizing: border-box
  - `box-content` → box-sizing: content-box
- 显示与可见性
  - `flex` | `none`
  - `visible` | `hidden`
- 溢出
  - `overflow-hidden` | `overflow-visible`
  - `overflow-x-hidden` | `overflow-y-hidden`（亦支持 visible）
- 定位
  - `relative` | `absolute` | `fixed`
- 位置（inset）
  - `top-10` `right-2.5` `bottom-[20px]` `left-full` `-top-4`
- 层级
  - `z-10` `z-100` `-z-1`

### 弹性盒子（flexbox.ts）
- 方向与换行
  - `flex-row` | `flex-col` | `flex-row-reverse` | `flex-col-reverse`
  - `flex-wrap` | `flex-nowrap` | `flex-wrap-reverse`
- 弹性项
  - `flex-1` | `flex-none` | `flex-auto` | `flex-initial`
  - `grow` | `grow-0` | `shrink` | `shrink-0`
  - `basis-20` `basis-[50%]` `basis-full` `basis-auto`（亦支持 `flex-basis-…`）
- 主轴/交叉轴对齐
  - `justify-center` | `justify-between` | `justify-around` | `justify-evenly`
  - `items-center` | `items-start` | `items-end` | `items-stretch`
  - `content-center` | `content-between` | `content-around` | `content-stretch`
  - `self-center` | `self-start` | `self-end` | `self-stretch` | `self-auto`

### 尺寸（size.ts）
- 宽高
  - `w-200` `w-[50%]` `w-auto` `w-full`
  - `h-100` `h-[20px]` `h-auto` `h-full`
- 最小/最大 宽高
  - `min-w-100` `min-w-[10rpx]`
  - `min-h-50` `min-h-[2px]`
  - `max-w-300` `max-w-[80%]`
  - `max-h-400` `max-h-[60px]`

### 间距（spacing.ts）
- 内边距（padding）：`p-4` `px-10` `py-2.5` `pt-[12px]`
- 外边距（margin）：`m-4` `mx-10` `my-2` `mt-[12px]` `-mb-6` `m-auto`

### 排版（typography.ts）
- 字体族：`font-sans` | `font-serif` | `font-mono`
- 字号：`text-12` `text-[14px]`
- 字体样式/粗细：`font-style-italic` | `font-bold` | `font-700`
- 字间距：`letter-spacing-1.5` `-letter-spacing-0.5` `letter-spacing-[2px]`
- 行数截断：`line-clamp-2`
- 行高：`leading-20` `leading-[1.6em]`
- 对齐：`text-align-left` | `text-align-center` | `text-align-right`
- 文本颜色：
  - 直接值：`text-[#333333]` `text-[rgb(34,34,34)]` `text-[rgba(0,0,0,0.6)]`
  - 主题色：`text-blue` `text-blue/80` `text-blue-500` `text-blue-500/60`
- 文本装饰与溢出：`underline` `line-through` `ellipsis` `clip`
- 空白处理：`normal` `nowrap`

### 边框（border.ts）
- 圆角：`rounded-8` `rounded-[12px]` `rounded-tr-6` `rounded-full` `rounded-none`
- 边框宽度：`border-1` `border-y-2` `border-t-[3px]`
- 边框样式：`border-solid` `border-dashed` `border-dotted`（支持 t/b/l/r/y/x 定位）
- 边框颜色：
  - 直接值：`border-[#000]` `border-[rgb(0,0,0)]` `border-[rgba(0,0,0,0.2)]`
  - 主题色：`border-blue` `border-blue/70` `border-y-blue-500/60` `border-t-blue-600`

### 背景（background.ts）
- 背景色：
  - 直接值：`bg-[#fafafa]` `bg-[rgb(250,250,250)]` `bg-[rgba(0,0,0,0.05)]`
  - 主题色：`bg-blue` `bg-blue/80` `bg-blue-500` `bg-blue-500/60`
- 渐变：
  - 自定义色：`bg-linear-to-r-#000-#fff` `bg-linear-to-tr-[rgb(0,0,0)]-[rgba(0,0,0,0.2)]`
  - 主题色：`bg-linear-to-r-blue-blue` `bg-linear-to-tr-blue-500-blue-500`
- 背景图：`bg-image-[*]` | `bg-none`

### 效果（effect.ts）
- 透明度：`opacity-60` `opacity-[0.25]`
- 阴影：`shadow-[0_2px_8px_rgba(0,0,0,0.15)]` `text-shadow-[1px_1px_2px_#000]`

### 变换（transform.ts）
- 自定义：`transform-[rotate(10deg)_scale(1.1)]`
- 旋转：`rotate-45` `rotate-x-30` `rotate-y-15` `rotate-z-90`
- 缩放：`scale-1.2` `scale-x-0.5` `scale-y-2`
- 位移：`translate-[10px,20px]` `translate-x-[10px]` `translate-y-[50%]`

### 过渡（transition.ts）
- 速写：`transition`（all,ease,150ms） `transition-opacity-300`
- 时序：`duration-200` `delay-150` `ease-linear|in|out|in-out`
- 属性：`property-opacity` `transition-property-[transform,opacity]`
- 禁用：`transition-none`

### 安全区域（safe-area.ts）
- `p-safe` `pt-safe` `pb-safe` `pl-safe` `pr-safe`

## 🔧 自动适配功能

本插件会自动检测并修改 `@unocss/vite` 插件，使其支持 `.uvue` 文件格式。这个过程是自动的，无需手动配置。

适配过程:
1. 查找项目根目录的 `node_modules`
2. 定位 `@unocss/vite/dist/index.mjs` 文件
3. 检查是否已支持 `.uvue` 文件
4. 如果未支持，自动添加 `.uvue` 扩展名支持

## 📝 示例项目

查看 `examples` 目录获取完整的使用示例。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！（欢迎 PR）

## 📄 许可证

[ISC](LICENSE)

## 👨‍💻 作者

JACK

## 📚 相关链接

- [UnoCSS](https://unocss.dev/)
- [uni-app-x](https://uniapp.dcloud.net.cn/uni-app-x/)
- [Vite](https://vitejs.dev/)
- [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp)

## 🔄 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解版本更新历史。

## ⚠️ 注意事项

1. 本插件仅支持 uni-app-x 的 app 端样式
2. 确保已安装 `@unocss/core` 和 `@unocss/vite`
3. 建议启用 `transformClass` 选项以避免类名中的特殊字符问题
4. 首次安装后会自动适配 `@unocss/vite`，如果适配失败请手动检查

## 💡 提示

- 使用 `transformClass: true` 可以自动处理类名中的特殊字符
- 配置 `content.pipeline` 可以优化构建性能
- 支持所有 UnoCSS 的配置选项和功能

---

如有问题或建议，欢迎提交 [Issue](https://github.com/tggdddd/unocss-uniapp-x/issues)！
