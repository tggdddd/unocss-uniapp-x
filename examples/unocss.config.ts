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