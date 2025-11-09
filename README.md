# UnoCSS UniApp X Preset

A UnoCSS preset for UniApp X development with support for WeChat Mini Program class transformation.

## Features

- 🎨 Full UnoCSS support for UniApp X
- 🔄 Automatic class name transformation for WeChat Mini Programs
- 📦 Built-in theme with Tailwind-compatible colors
- ⚡ Fast build with Webpack 5
- 🎯 TypeScript support

## Installation

```bash
npm install
```

## Build Scripts

### Production Build
```bash
npm run build
```
Builds the project in production mode with optimizations and source maps.

### Development Build
```bash
npm run build:dev
```
Builds the project in development mode with faster compilation.

### Watch Mode
```bash
npm run build:watch
```
Watches for file changes and rebuilds automatically in development mode.

### Type Check
```bash
npm run type-check
```
Runs TypeScript type checking without emitting files.

### Clean
```bash
npm run clean
```
Removes the `dist` directory.

## Project Structure

```
.
├── config.ts              # Transformer configuration
├── index.ts              # Main preset entry
├── preflights.ts         # Preflight styles
├── rules/                # CSS rules
│   ├── background.ts
│   ├── border.ts
│   ├── effect.ts
│   ├── flexbox.ts
│   ├── layout.ts
│   ├── size.ts
│   ├── spacing.ts
│   ├── transform.ts
│   ├── transition.ts
│   └── typography.ts
├── theme/                # Theme configuration
│   ├── colors.ts
│   ├── types.ts
│   └── index.ts
├── transformer/          # Class transformers
│   └── unocss-preset-weapp.ts
├── utils/                # Utility functions
│   └── index.ts
└── dist/                 # Build output
    ├── index.js
    └── test.js
```

## Usage

```typescript
import { presetUniAppX } from './index'
import { createGenerator } from '@unocss/core'

const uno = await createGenerator({
  presets: [
    presetUniAppX({
      // Options
      preflight: true,
      transform: true,
      transformClass: true,
      numUnit: 'rpx',
      numScale: 1,
    })
  ],
})

const { css } = await uno.generate('text-red-500 bg-blue-100')
```

## Configuration Options

- `transform`: Enable class name transformation (default: `false`)
- `transformClass`: Enable class transformer (default: `false`)
- `transformRules`: Custom transformation rules
- `numUnit`: Default unit for numbers (`'px'` | `'rpx'`, default: `'px'`)
- `numScale`: Scale factor for numbers (default: `1`)

## Dependencies

### Runtime Dependencies
- `@unocss/core`: UnoCSS core library
- `unplugin-transform-class`: Class transformation utilities

### Development Dependencies
- `typescript`: TypeScript compiler
- `webpack`: Module bundler
- `ts-loader`: TypeScript loader for Webpack
- `vitest`: Testing framework

## Build Configuration

The project uses Webpack 5 with the following features:
- ES Module output
- TypeScript compilation with ts-loader
- Source maps for debugging
- Node.js polyfills
- Optimized production builds

## License

ISC
