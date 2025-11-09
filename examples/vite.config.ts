import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni';
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