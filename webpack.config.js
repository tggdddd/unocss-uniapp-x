import path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  
  const baseConfig = {
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: isDevelopment,
              compilerOptions: {
                module: 'esnext',
                target: 'es2020',
              },
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    target: 'node',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.mjs', '.cjs'],
      fullySpecified: false,
      fallback: {
        buffer: false,
        fs: false,
        path: false,
        fsevents: false,
      },
    },
    externals: [
      'fsevents',
      '@unocss/core',
      'unplugin-transform-class',
      'unplugin-transform-class/utils',
      /^node:.*/,
    ],
    optimization: {
      minimize: false,
      concatenateModules: false,
    },
  };

  // ESM build (index.mjs)
  const esmConfig = {
    ...baseConfig,
    output: {
      filename: 'index.mjs',
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: 'module',
      },
      clean: true,
      environment: {
        module: true,
        dynamicImport: true,
      },
    },
    experiments: {
      outputModule: true,
    },
    externalsType: 'module',
  };

  // CommonJS build (index.cjs)
  const cjsConfig = {
    ...baseConfig,
    output: {
      filename: 'index.cjs',
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: 'commonjs2',
      },
      clean: false,
    },
  };

  return [esmConfig, cjsConfig];
};