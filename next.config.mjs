/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // 只在客户端构建时启用代码分割
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // 将第三方库拆分为单独的chunk
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|next|@next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // 获取第三方包的名称，用于动态命名chunks
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 30,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // 将公共组件拆分为单独的chunk
          components: {
            name: 'components',
            test: /[\\/]components[\\/]/,
            chunks: 'all',
            priority: 20,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // 默认的chunk组
          commons: {
            name: 'commons',
            minChunks: 3,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }
    
    return config;
  },
}

export default nextConfig
