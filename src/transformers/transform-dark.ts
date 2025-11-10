import type { SourceCodeTransformer } from '@unocss/core'
import { escapeRegExp, expandVariantGroup } from '@unocss/core'

export interface DarkOptions {
  // 暗色模式类名前缀 如 dark 即 dark:text-white
  darkVariant?:string
}

export default function transformerDark(options: DarkOptions = {}): SourceCodeTransformer {
  const {
    darkVariant = 'dark'
  } = options
  // #2866
  const compiledClass = new Set()
  const regexp = new RegExp(`${darkVariant}:(\\S+)`, 'g');
  
  return {
    name: 'transformer-dark',
    enforce: 'pre',
    transform(s, _, { uno, tokens, invalidate }) {
      const matches = [...s.original.matchAll(regexp)]
      if (!matches.length)
        return
      const size = compiledClass.size
      for (const match of matches) {
        if (tokens&&!tokens.has(match[0])){
          compiledClass.add(match[0])
          uno.config.shortcuts.push([match[0], match[1]])
          tokens.add(match[0])
        }
      }
      if (compiledClass.size > size)
        invalidate()
    },
  }
}