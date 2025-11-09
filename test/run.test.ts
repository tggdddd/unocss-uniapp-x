import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetUniAppX from '../src/index'

describe('on demand generate rule', () => {
  it('generate rule', async () => {
    const uno = await createGenerator({
      presets: [
        presetUniAppX()
      ],
    })
    const { css: noPreflightCSS } = await uno.generate('text-red')
    expect(noPreflightCSS).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-red{color:#f87171;}"
    `)
  })
  it('generate rule2', async () => {
    const uno = await createGenerator({
      presets: [
        presetUniAppX()
      ],
    })
    const { css: noPreflightCSS } = await uno.generate(`
     bg-linear-to-t-#111111-#222222
    `)
    expect(noPreflightCSS).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-linear-to-t-#111111-#222222{background-image:linear-gradient(to top,#111111,#222222);}"
    `)
  })
})
