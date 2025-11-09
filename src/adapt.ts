import * as fs from 'fs';
import * as path from 'path';

/**
 * 查找项目根目录的 node_modules 目录
 * 从当前包所在位置向上查找
 */
function findRootNodeModules(): string | null {
  let currentDir = __dirname;

  // 向上查找，直到找到包含 node_modules 的目录
  while (currentDir !== path.parse(currentDir).root) {
    // 检查当前目录是否在 node_modules 中
    if (currentDir.includes('node_modules')) {
      // 找到 node_modules 的位置，获取其父目录的 node_modules
      const nodeModulesIndex = currentDir.lastIndexOf('node_modules');
      const rootNodeModules = currentDir.substring(
        0,
        nodeModulesIndex + 'node_modules'.length
      );
      return rootNodeModules;
    }
    currentDir = path.dirname(currentDir);
  }

  // 如果没有找到，尝试使用 process.cwd()
  const cwdNodeModules = path.join(process.cwd(), 'node_modules');
  if (fs.existsSync(cwdNodeModules)) {
    return cwdNodeModules;
  }

  return null;
}

/**
 * 适配 UnoCSS Vite 插件以支持 .uvue 文件
 * 检测并修改 @unocss/vite 插件文件，确保支持 uni-app-x 的 .uvue 文件格式
 */
export function adaptUnoCSS() {
  try {
    // 查找根目录的 node_modules
    const rootNodeModules = findRootNodeModules();

    if (!rootNodeModules) {
      // console.warn('[unocss-uni-app-x] 未找到 node_modules 目录，跳过适配');
      return false;
    }

    // 构建 @unocss/vite/dist/index.mjs 的路径
    const unocssVitePath = path.join(
      rootNodeModules,
      '@unocss/vite/dist/index.mjs'
    );

    // 检测文件是否存在
    if (!fs.existsSync(unocssVitePath)) {
      // console.warn(
      //   '[unocss-uni-app-x] @unocss/vite/dist/index.mjs 文件不存在，跳过适配'
      // );
      return false;
    }

    // 读取文件内容
    let content = fs.readFileSync(unocssVitePath, 'utf-8');

    // 判断是否已经包含 uvue 字符串
    if (content.includes('uvue')) {
      // console.log(
      //   '[unocss-uni-app-x] @unocss/vite 已支持 .uvue 文件，无需修改'
      // );
      return true;
    }

    // 全局替换 .vue 为 .uvue 以支持 uvue 文件
    // 匹配常见的 .vue 扩展名模式
    content = content.replace(/\.vue(?![\w])/g, '.uvue');

    // 写回文件
    fs.writeFileSync(unocssVitePath, content, 'utf-8');

    // console.log('[unocss-uni-app-x] 成功适配 @unocss/vite 以支持 .uvue 文件');
    return true;
  } catch (error) {
    console.error('[unocss-uni-app-x] 适配 UnoCSS 时出错:', error);
    return false;
  }
}

/**
 * 自动执行适配
 */
export function autoAdapt() {
  adaptUnoCSS();
}
