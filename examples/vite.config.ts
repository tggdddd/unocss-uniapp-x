import presetUniAppX from 'unocss-uni-app-x'
export default {
  presets: [
    presetUniAppX({
      include: [/\.(uvue)($|\?)/],
      transformClass: true,
	  classTags:true,
		content: {
			filesystem: ["pipeline"],
			pipeline: {
				include: [/\.(uvue)($|\?)/],
				exclude: [/\.(css|postcss|sass|scss|less|stylus|styl|uts)($|\?)/],
			}
		}
    })
  ],
}