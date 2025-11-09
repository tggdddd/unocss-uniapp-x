# unocss-uniapp-x

<p align="center">
  <img src="https://img.shields.io/npm/v/unocss-uniapp-x" alt="npm version">
  <img src="https://img.shields.io/npm/l/unocss-uniapp-x" alt="license">
  <img src="https://img.shields.io/npm/dm/unocss-uniapp-x" alt="downloads">
</p>

> 🎨 UnoCSS preset for uni-app-x - 为 uni-app-x 提供原子化 CSS 支持

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
  <view class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <text class="text-2xl font-bold text-blue-500 mb-4">Hello uni-app-x!</text>
    <view class="w-200 h-100 bg-white rounded-lg shadow-md p-4">
      <text class="text-gray-700">这是一个使用 UnoCSS 的示例</text>
    </view>
  </view>
</template>
```

## ⚙️ 配置选项

### PresetUniAppXOptions

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `preflight` | `boolean` | `true` | 是否启用预设样式 |
| `transformClass` | `boolean` | `false` | 是否转换类名中的特殊字符 |
| `transformRules` | `object` | 见下方 | 类名转换规则 |
| `whRpx` | `boolean` | `true` | 是否启用 rpx 单位 |
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

## 🎨 支持的 CSS 规则

### 布局 (Layout)
- `display` - flex, block, inline, etc.
- `position` - relative, absolute, fixed, etc.
- `z-index` - 层级控制

### 弹性盒子 (Flexbox)
- `flex`, `flex-direction`, `flex-wrap`
- `justify-content`, `align-items`, `align-content`
- `flex-grow`, `flex-shrink`, `flex-basis`

### 尺寸 (Size)
- `width`, `height`
- `min-width`, `min-height`
- `max-width`, `max-height`

### 间距 (Spacing)
- `margin` - m, mt, mr, mb, ml, mx, my
- `padding` - p, pt, pr, pb, pl, px, py

### 排版 (Typography)
- `font-size`, `font-weight`, `font-family`
- `line-height`, `letter-spacing`
- `text-align`, `text-decoration`, `text-transform`
- `color`

### 边框 (Border)
- `border`, `border-width`, `border-style`, `border-color`
- `border-radius`

### 背景 (Background)
- `background-color`
- `background-size`, `background-position`, `background-image`

### 效果 (Effects)
- `opacity`
- `box-shadow`

### 变换 (Transform)
- `transform` - translate, rotate, scale, etc.

### 过渡 (Transition)
- `transition`
- `transition-property`, `transition-duration`, `transition-timing-function`

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

欢迎提交 Issue 和 Pull Request！

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

如有问题或建议，欢迎提交 [Issue](https://github.com/yourusername/unocss-uniapp-x/issues)！
