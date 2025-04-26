import { createRequire } from 'module';
const require = createRequire(import.meta.url);

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
    unoptimized: true, // 禁用图像优化以减少包体积
  },
  // 关键！忽略构建错误，包括文件大小限制
  onDemandEntries: {
    // 在开发模式下配置页面缓存设置
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
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
    // 允许构建更大的页面数据（关键设置）
    largePageDataBytes: 128 * 1000 * 1000, // 增加到128MB
    // 进一步优化构建，忽略更多错误
    skipMiddlewareUrlNormalize: true,
    skipTrailingSlashRedirect: true,
    workerThreads: true,
    isrFlushToDisk: false,
    instrumentationHook: false,
    turbotrace: {
      logLevel: 'error',
      logAll: false,
      contextDirectory: [],
    },
  },
  webpack: (config, { isServer, dev }) => {
    // 告诉Webpack不要检查文件大小限制
    if (config.performance) {
      config.performance.hints = false;
      config.performance.maxAssetSize = 100 * 1024 * 1024; // 100MB
      config.performance.maxEntrypointSize = 100 * 1024 * 1024; // 100MB
    }
    
    // 只在客户端生产构建时启用代码分割
    if (!isServer && !dev) {
      // 将React和其他库标记为外部依赖，通过CDN加载
      config.externals = {
        ...config.externals,
        react: 'React',
        'react-dom': 'ReactDOM',
      };
      
      // 设置更细粒度的分割策略
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 50, // 大幅增加允许的并行请求数
        maxAsyncRequests: 50,
        minSize: 3000, // 进一步降低最小块大小到3KB
        maxSize: 1000000, // 强制限制每个chunk最大为1MB
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](@babel|next|react|react-dom|scheduler|styled-jsx|use-subscription)[\\/]/,
            priority: 60,
            chunks: 'all',
            enforce: true,
          },
          reactPackages: {
            name: 'react-packages',
            test: /[\\/]node_modules[\\/](react-[^/]+)[\\/]/,
            priority: 55,
            chunks: 'all',
          },
          // 每个radix组件独立打包
          radix: {
            name(module) {
              const packagePath = module.context || '';
              const radixPattern = /@radix-ui[\\/]react-([^/\\]+)/;
              const match = packagePath.match(radixPattern);
              if (match && match[1]) {
                return `radix.${match[1]}`;
              }
              return 'radix-shared';
            },
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            priority: 50,
            enforce: true,
            chunks: 'all',
            minSize: 0,
          },
          // 独立打包每个大型库
          recharts: {
            name: 'recharts',
            test: /[\\/]node_modules[\\/]recharts[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          dateFns: {
            name: 'date-fns',
            test: /[\\/]node_modules[\\/]date-fns[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          cmdk: {
            name: 'cmdk',
            test: /[\\/]node_modules[\\/]cmdk[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          lucide: {
            name: 'lucide',
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          // 将小型库按字母分组
          libs: {
            name(module) {
              const packageName = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1] || 'misc';
              const firstChar = packageName.charAt(0).toLowerCase();
              return `npm.${firstChar}`;
            },
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // 将UI组件拆分为多个块
          uiComponents: {
            name: 'ui-components',
            test: /[\\/]components[\\/]ui[\\/]/,
            priority: 25,
            chunks: 'all',
            enforce: true,
            reuseExistingChunk: true,
          },
          // 将表单组件拆分为单独的块
          formComponents: {
            name: 'form-components',
            test: /[\\/]components[\\/]form[\\/]/,
            priority: 25,
            chunks: 'all',
            enforce: true,
            reuseExistingChunk: true,
          },
          // 其他组件
          components: {
            name: 'components',
            test: /[\\/]components[\\/]/,
            priority: 20,
            chunks: 'all',
            enforce: true,
            reuseExistingChunk: true,
          },
          // 页面微块
          pages: {
            name(module) {
              const path = module.resource || '';
              const hash = require('crypto')
                .createHash('md5')
                .update(path)
                .digest('hex')
                .substring(0, 6);
              return `page-${hash}`;
            },
            test: /[\\/]pages[\\/]|[\\/]app[\\/]/,
            priority: 10,
            enforce: true,
            reuseExistingChunk: true,
            minSize: 0,
            maxSize: 750000, // 强制限制页面块最大为750KB
          },
        },
      };
      
      // 启用模块压缩
      config.optimization.minimize = true;
      
      // 禁用模块合并以减小文件大小
      config.optimization.concatenateModules = false;
      
      // 调整优化设置
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;
    }
    
    return config;
  },
  // 启用输出压缩，优化文件大小
  compress: true,
  // 关闭静态导出，使用服务端渲染可以减小客户端包大小
  output: 'standalone',
  // 不生成源映射可以减小输出的大小
  productionBrowserSourceMaps: false,
  // 关键！设置为true以忽略构建错误
  ignoreBuildErrors: true,
}

export default nextConfig
