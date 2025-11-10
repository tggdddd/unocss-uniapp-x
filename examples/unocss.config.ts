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
      numberUnit:'px',
      numberScale:1,
      // 启用类名转换
      transformClass: true,
      
      // 启用类标签
      classTags: true,
      // 是否启用暗色模式  parent|near|none
      darkEnable:'none',
    
      // 暗色模式类名 
      darkClass:'theme-dark',
    
      // 暗色模式类名前缀 如 dark 即 dark:text-white
      darkVariant:'dark'
    })
  ],
}