import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import presetUniAppX from '../src/index'

describe('Typography Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })


  it('font family sans', async () => {
    const { css } = await (await uno).generate('font-sans')
    expect(css).toContain('font-family:')
  })
  it('font size with number', async () => {
    const { css } = await (await uno).generate('text-16')
    expect(css).toContain('font-size:16px')
  })

  it('font size with bracket', async () => {
    const { css } = await (await uno).generate('text-[20px]')
    expect(css).toContain('font-size:20px')
  })

  it('font size with bracket', async () => {
    const { css } = await (await uno).generate('text-[20rpx]')
    expect(css).toContain('font-size:20rpx')
  })

  it('font size with bracket', async () => {
    const { css } = await (await uno).generate('text-[20%]')
    expect(css).toContain('font-size:20%')
  })
  it('font weight with bracket', async () => {
    const { css } = await (await uno).generate('font-bold')
    expect(css).toContain('font-weight:700')
  })


  it('font weight bold', async () => {
    const { css } = await (await uno).generate('font-bold')
    expect(css).toContain('font-weight:700')
  })

  it('letter spacing', async () => {
    const { css } = await (await uno).generate('letter-spacing-2')
    expect(css).toContain('letter-spacing:2px')
  })
  
  it('letter spacing', async () => {
    const { css } = await (await uno).generate('-letter-spacing-2')
    expect(css).toContain('letter-spacing:-2px')
  })
  
  it('letter spacing', async () => {
    const { css } = await (await uno).generate('letter-spacing-[2px]')
    expect(css).toContain('letter-spacing:2px')
  })
  
  it('line clamp', async () => {
    const { css } = await (await uno).generate('line-clamp-3')
    expect(css).toContain('lines:3')
  })
  
  it('line height', async () => {
    const { css } = await (await uno).generate('leading-24')
    expect(css).toContain('line-height:24px')
  })
  it('line height', async () => {
    const { css } = await (await uno).generate('leading-[24px]')
    expect(css).toContain('line-height:24px')
  })

  it('text align center', async () => {
    const { css } = await (await uno).generate('text-align-center')
    expect(css).toContain('text-align:center')
  })

  it('text color with hex', async () => {
    const { css } = await (await uno).generate('text-[#ff0000]')
    expect(css).toContain('color:#ff0000')
  })

  it('text color with rgb', async () => {
    const { css } = await (await uno).generate('text-[rgb(255,0,0)]')
    expect(css).toContain('color:rgb(255,0,0)')
  })

  it('text color with rgba', async () => {
    const { css } = await (await uno).generate('text-[rgba(255,0,0,0.5)]')
    expect(css).toContain('color:rgba(255,0,0,0.5)')
  })

  it('text color from theme', async () => {
    const { css } = await (await uno).generate('text-red')
    expect(css).toContain('color:#f87171')
  })

  it('text color from theme', async () => {
    const { css } = await (await uno).generate('text-red/50')
    expect(css).toContain('color:#f8717180')
  })
  it('text color from theme', async () => {
    const { css } = await (await uno).generate('text-red/100')
    expect(css).toContain('color:#f87171FF')
  })

  it('font weight normal', async () => {
    const { css } = await (await uno).generate('font-normal')
    expect(css).toContain('font-weight:400')
  })

  it('text decoration underline', async () => {
    const { css } = await (await uno).generate('underline')
    expect(css).toContain('text-decoration-line:underline')
  })

  it('text overflow ellipsis', async () => {
    const { css } = await (await uno).generate('ellipsis')
    expect(css).toContain('text-overflow:ellipsis')
  })

  it('white space nowrap', async () => {
    const { css } = await (await uno).generate('nowrap')
    expect(css).toContain('white-space:nowrap')
  })
})

describe('Background Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('background color with hex', async () => {
    const { css } = await (await uno).generate('bg-[#ff0000]')
    expect(css).toContain('background-color:#ff0000')
  })

  it('background color with rgb', async () => {
    const { css } = await (await uno).generate('bg-[rgb(255,0,0)]')
    expect(css).toContain('background-color:rgb(255,0,0)')
  })

  it('background color from theme', async () => {
    const { css } = await (await uno).generate('bg-blue')
    expect(css).toContain('background-color:#60a5fa')
  })

  it('background linear gradient to top', async () => {
    const { css } = await (await uno).generate('bg-linear-to-t-blue/100-blue/100')
    expect(css).toContain('background-image:linear-gradient(to top, #60a5faFF, #60a5faFF)')
  })
  it('background linear gradient to top', async () => {
    const { css } = await (await uno).generate('bg-linear-to-t-#111111-#222222')
    expect(css).toContain('background-image:linear-gradient(to top, #111111, #222222)')
  })

  it('background linear gradient to bottom', async () => {
    const { css } = await (await uno).generate('bg-linear-to-b-#ff0000-#00ff00')
    expect(css).toContain('background-image:linear-gradient(to bottom, #ff0000, #00ff00)')
  })

  it('background linear gradient to right', async () => {
    const { css } = await (await uno).generate('bg-linear-to-r-#000000-#ffffff')
    expect(css).toContain('background-image:linear-gradient(to right, #000000, #ffffff)')
  })

  it('background none', async () => {
    const { css } = await (await uno).generate('bg-none')
    expect(css).toContain('background-image:none')
  })

  it('background image', async () => {
    const { css } = await (await uno).generate('bg-image-[url(https://via.placeholder.com/150)]')
    expect(css).toContain('background-image:url(https://via.placeholder.com/150)')
  })
})

describe('Border Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('border radius', async () => {
    const { css } = await (await uno).generate('rounded-8')
    expect(css).toContain('border-radius:8px')
  })

  it('border radius with bracket', async () => {
    const { css } = await (await uno).generate('rounded-[10px]')
    expect(css).toContain('border-radius:10px')
  })

  it('border radius top-left', async () => {
    const { css } = await (await uno).generate('rounded-tl-4')
    expect(css).toContain('border-top-left-radius:4px')
  })

  it('border radius full', async () => {
    const { css } = await (await uno).generate('rounded-full')
    expect(css).toContain('border-radius:9999px')
  })

  it('border width', async () => {
    const { css } = await (await uno).generate('border-2')
    expect(css).toContain('border-width:2px')
  })

  it('border width top', async () => {
    const { css } = await (await uno).generate('border-t-1')
    expect(css).toContain('border-top-width:1px')
  })

  it('border width x-axis', async () => {
    const { css } = await (await uno).generate('border-x-2')
    expect(css).toContain('border-left-width:2px')
    expect(css).toContain('border-right-width:2px')
  })

  it('border color with hex', async () => {
    const { css } = await (await uno).generate('border-[#ff0000]')
    expect(css).toContain('border-color:#ff0000')
  })

  it('border color from theme', async () => {
    const { css } = await (await uno).generate('border-red')
    expect(css).toContain('border-color:#f87171')
  })
  it('border color from theme', async () => {
    const { css } = await (await uno).generate('border-red/100')
    expect(css).toContain('border-color:#f87171FF')
  })

  it('border color from theme', async () => {
    const { css } = await (await uno).generate('border-y-red/100')
    expect(css).toContain('border-top-color:#f87171FF')
    expect(css).toContain('border-bottom-color:#f87171FF')
  })

  it('border style solid', async () => {
    const { css } = await (await uno).generate('border-solid')
    expect(css).toContain('border-style:')
  })
})

describe('Spacing Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('padding all sides', async () => {
    const { css } = await (await uno).generate('p-16')
    expect(css).toContain('padding:16px')
  })

  it('padding top', async () => {
    const { css } = await (await uno).generate('p-t-8')
    expect(css).toContain('padding-top:8px')
  })

  it('padding x-axis', async () => {
    const { css } = await (await uno).generate('p-x-12')
    expect(css).toContain('padding-left:12px')
    expect(css).toContain('padding-right:12px')
  })

  it('padding with bracket', async () => {
    const { css } = await (await uno).generate('p-[20px]')
    expect(css).toContain('padding:20px')
  })

  it('margin all sides', async () => {
    const { css } = await (await uno).generate('m-16')
    expect(css).toContain('margin:16px')
  })

  it('margin bottom', async () => {
    const { css } = await (await uno).generate('m-b-10')
    expect(css).toContain('margin-bottom:10px')
  })

  it('negative margin', async () => {
    const { css } = await (await uno).generate('-m-t-8')
    expect(css).toContain('margin-top:-8px')
  })

  it('margin y-axis', async () => {
    const { css } = await (await uno).generate('m-y-20')
    expect(css).toContain('margin-top:20px')
    expect(css).toContain('margin-bottom:20px')
  })
})

describe('Size Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('width with number', async () => {
    const { css } = await (await uno).generate('w-100')
    expect(css).toContain('width:100px')
  })

  it('width full', async () => {
    const { css } = await (await uno).generate('w-full')
    expect(css).toContain('width:100%')
  })

  it('width with bracket', async () => {
    const { css } = await (await uno).generate('w-[200px]')
    expect(css).toContain('width:200px')
  })

  it('height with number', async () => {
    const { css } = await (await uno).generate('h-50')
    expect(css).toContain('height:50px')
  })

  it('height full', async () => {
    const { css } = await (await uno).generate('h-full')
    expect(css).toContain('height:100%')
  })

  it('min-width', async () => {
    const { css } = await (await uno).generate('min-w-100')
    expect(css).toContain('min-width:100px')
  })

  it('max-width', async () => {
    const { css } = await (await uno).generate('max-w-500')
    expect(css).toContain('max-width:500px')
  })

  it('min-height', async () => {
    const { css } = await (await uno).generate('min-h-80')
    expect(css).toContain('min-height:80px')
  })

  it('max-height', async () => {
    const { css } = await (await uno).generate('max-h-600')
    expect(css).toContain('max-height:600px')
  })
})

describe('Flexbox Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('flex direction row', async () => {
    const { css } = await (await uno).generate('flex-row')
    expect(css).toContain('flex-direction:row')
  })

  it('flex direction column', async () => {
    const { css } = await (await uno).generate('flex-col')
    expect(css).toContain('flex-direction:column')
  })

  it('flex wrap', async () => {
    const { css } = await (await uno).generate('flex-wrap')
    expect(css).toContain('flex-wrap:wrap')
  })

  it('flex 1', async () => {
    const { css } = await (await uno).generate('flex-1')
    expect(css).toContain('flex:1 1 0')
  })

  it('justify content center', async () => {
    const { css } = await (await uno).generate('justify-center')
    expect(css).toContain('justify-content:center')
  })

  it('justify content between', async () => {
    const { css } = await (await uno).generate('justify-between')
    expect(css).toContain('justify-content:space-between')
  })

  it('align items center', async () => {
    const { css } = await (await uno).generate('items-center')
    expect(css).toContain('align-items:center')
  })

  it('align items start', async () => {
    const { css } = await (await uno).generate('items-start')
    expect(css).toContain('align-items:flex-start')
  })

  it('align self center', async () => {
    const { css } = await (await uno).generate('self-center')
    expect(css).toContain('align-self:center')
  })

  it('flex basis', async () => {
    const { css } = await (await uno).generate('basis-100')
    expect(css).toContain('flex-basis:100px')
  })

  it('flex grow', async () => {
    const { css } = await (await uno).generate('grow-1')
    expect(css).toContain('flex-grow:1')
  })

  it('flex shrink', async () => {
    const { css } = await (await uno).generate('shrink-0')
    expect(css).toContain('flex-shrink:0')
  })
})

describe('Layout Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('display flex', async () => {
    const { css } = await (await uno).generate('flex')
    expect(css).toContain('display:flex')
  })

  it('display none', async () => {
    const { css } = await (await uno).generate('none')
    expect(css).toContain('display:none')
  })

  it('position relative', async () => {
    const { css } = await (await uno).generate('relative')
    expect(css).toContain('position:relative')
  })

  it('position absolute', async () => {
    const { css } = await (await uno).generate('absolute')
    expect(css).toContain('position:absolute')
  })

  it('position fixed', async () => {
    const { css } = await (await uno).generate('fixed')
    expect(css).toContain('position:fixed')
  })

  it('bottom position', async () => {
    const { css } = await (await uno).generate('bottom-10')
    expect(css).toContain('bottom:10px')
  })

  it('overflow hidden', async () => {
    const { css } = await (await uno).generate('overflow-hidden')
    expect(css).toContain('overflow:hidden')
  })

  it('z-index', async () => {
    const { css } = await (await uno).generate('z-10')
    expect(css).toContain('z-index:10')
  })

  it('box sizing border-box', async () => {
    const { css } = await (await uno).generate('box-border')
    expect(css).toContain('box-sizing:border-box')
  })

  it('visibility hidden', async () => {
    const { css } = await (await uno).generate('hidden')
    expect(css).toContain('visibility:hidden')
  })
})

describe('Effect Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('opacity with number', async () => {
    const { css } = await (await uno).generate('opacity-50')
    expect(css).toContain('opacity:0.5')
  })

  it('opacity 75', async () => {
    const { css } = await (await uno).generate('opacity-75')
    expect(css).toContain('opacity:0.75')
  })

  it('opacity 100', async () => {
    const { css } = await (await uno).generate('opacity-100')
    expect(css).toContain('opacity:1')
  })
})

describe('Transform Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('rotate', async () => {
    const { css } = await (await uno).generate('rotate-45')
    expect(css).toContain('transform:rotate(45deg)')
  })

  it('rotate-x', async () => {
    const { css } = await (await uno).generate('rotate-x-90')
    expect(css).toContain('transform:rotateX(90deg)')
  })

  it('scale', async () => {
    const { css } = await (await uno).generate('scale-150')
    expect(css).toContain('transform:scale(150)')
  })

  it('scale-x', async () => {
    const { css } = await (await uno).generate('scale-x-50')
    expect(css).toContain('transform:scaleX(50)')
  })

  it('translate-x', async () => {
    const { css } = await (await uno).generate('translate-x-[10px]')
    expect(css).toContain('transform:translateX(10px)')
  })

  it('translate-y', async () => {
    const { css } = await (await uno).generate('translate-y-[20px]')
    expect(css).toContain('transform:translateY(20px)')
  })
})

describe('Transition Rules', () => {
  const uno = createGenerator({
    presets: [presetUniAppX()]
  })

  it('transition default', async () => {
    const { css } = await (await uno).generate('transition')
    expect(css).toContain('transition-property:all')
    expect(css).toContain('transition-duration:150ms')
  })

  it('transition with duration', async () => {
    const { css } = await (await uno).generate('transition-300')
    expect(css).toContain('transition-duration:300ms')
  })

  it('transition property', async () => {
    const { css } = await (await uno).generate('transition-opacity')
    expect(css).toContain('transition-property:opacity')
  })

  it('transition duration', async () => {
    const { css } = await (await uno).generate('duration-500')
    expect(css).toContain('transition-duration:500ms')
  })

  it('transition delay', async () => {
    const { css } = await (await uno).generate('delay-200')
    expect(css).toContain('transition-delay:200ms')
  })

  it('transition ease', async () => {
    const { css } = await (await uno).generate('ease-in-out')
    expect(css).toContain('transition-timing-function:in-out')
  })

  it('transition none', async () => {
    const { css } = await (await uno).generate('transition-none')
    expect(css).toContain('transition:none')
  })
})
