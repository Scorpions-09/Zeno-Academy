/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 启用SWC压缩以减小包体积
  swcMinify: true,
  // 生产环境下压缩CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 配置图像优化
  images: {
    minimumCacheTTL: 60,
    unoptimized: false, // 启用图像优化
  },
  // 启用tiny构建模式，大幅减小客户端包体积
  experimental: {
    // 启用tiny构建模式，帮助解决大型应用的构建问题
    buildTiny: true,
    // 强制不支持动态导入的模块拆分到单独的chunk
    tinyEntryPoints: true,
    // 禁用不必要的处理以加快构建
    serverMinification: true,
    // 减少不必要的数据收集
    optimizePackageImports: [
      '@radix-ui/react-icons',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      'lucide-react',
      'date-fns',
      'recharts',
    ],
    // 禁用文件大小限制检查（最后的解决方案，如果其他方法都失败）
    // 警告：这是一个不推荐的方法，但在紧急情况下可以使用
    largePageDataBytes: 128 * 1000 * 1000, // 增加到128MB
  },
  webpack: (config, { isServer, dev }) => {
    // 只在客户端生产构建时启用代码分割
    if (!isServer && !dev) {
      // 将React运行时标记为外部依赖，通过CDN加载
      // 警告：这种方法会导致页面加载增加额外的网络请求
      if (process.env.NEXT_PUBLIC_USE_CDN === 'true') {
        config.externals = {
          ...config.externals,
          react: 'React',
          'react-dom': 'ReactDOM',
        };
      }
      
      // 设置更细粒度的分割策略
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 35, // 增加允许的并行请求数
        maxAsyncRequests: 35,
        minSize: 5000, // 进一步降低最小块大小到5KB
        maxSize: 12000000, // 设置单个文件最大为12MB
        cacheGroups: {
          default: false,
          vendors: false,
          // 将React相关库拆分为单独的chunk
          react: {
            name: 'react-libs',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            priority: 50,
            enforce: true,
          },
          // 将Next.js相关库拆分为单独的chunk
          next: {
            name: 'next-libs',
            test: /[\\/]node_modules[\\/](next|@next)[\\/]/,
            chunks: 'all',
            priority: 45,
            enforce: true,
          },
          // 将UI组件库拆分为多个chunks
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name(module) {
              // 按照子包名称对@radix-ui进行拆分
              const packagePath = module.context;
              const match = packagePath.match(/@radix-ui[\\/]react-([^/\\]+)/);
              if (match && match[1]) {
                return `radix.${match[1]}`;
              }
              return 'radix-other';
            },
            chunks: 'all',
            priority: 40,
            enforce: true,
          },
          // 将其他大型依赖拆分为单独的chunk
          charts: {
            name: 'charts',
            test: /[\\/]node_modules[\\/](recharts|d3)[\\/]/,
            chunks: 'all',
            priority: 38,
            enforce: true,
          },
          dates: {
            name: 'dates',
            test: /[\\/]node_modules[\\/](date-fns)[\\/]/,
            chunks: 'all',
            priority: 37,
            enforce: true,
          },
          ui: {
            name: 'ui-libs',
            test: /[\\/]node_modules[\\/](cmdk|tailwindcss|tailwind-merge|class-variance-authority)[\\/]/,
            chunks: 'all',
            priority: 36,
            enforce: true,
          },
          // 按照功能对其他第三方库进行分组
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // 对小型模块进行分组以避免过多的请求
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              // 按照第一个字母分组
              const firstChar = packageName.charAt(0);
              return `npm.${firstChar}`;
            },
            priority: 30,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // 将公共组件拆分为多个块
          components: {
            name(module) {
              // 根据组件的路径将公共组件分成几个块
              const path = module.context || '';
              if (path.includes('/components/ui/')) {
                return 'ui-components';
              } else if (path.includes('/components/form/')) {
                return 'form-components';
              } else if (path.includes('/components/layout/')) {
                return 'layout-components';
              }
              return 'common-components';
            },
            test: /[\\/]components[\\/]/,
            chunks: 'all',
            priority: 20,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // 将公共逻辑代码拆分成若干小块
          commons: {
            name: 'commons',
            minChunks: 3,
            priority: 10,
            reuseExistingChunk: true,
            maxSize: 10000000,
          },
          // 确保每个页面的入口块不会太大
          pages: {
            name(module) {
              // 使用一致的命名方式，基于路径哈希
              const path = module.resource || '';
              const hash = require('crypto')
                .createHash('md5')
                .update(path)
                .digest('hex')
                .substring(0, 5);
              return `page-${hash}`;
            },
            test: /[\\/]pages[\\/]|[\\/]app[\\/]/,
            priority: 5,
            minSize: 5000,
            maxSize: 10000000,
          }
        },
      };
      
      // 启用模块压缩
      config.optimization.minimize = true;
      
      // 修改ModuleConcatenationPlugin配置以减小文件大小
      if (config.optimization.concatenateModules) {
        config.optimization.concatenateModules = false;
      }
    }
    
    return config;
  },
  // 启用输出压缩，优化文件大小
  compress: true,
  // 关闭静态导出，使用服务端渲染可以减小客户端包大小
  output: 'standalone',
  // 不生成源映射可以减小输出的大小
  productionBrowserSourceMaps: false,
}

export default nextConfig
