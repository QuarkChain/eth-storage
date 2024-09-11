const webpack = require('webpack');

module.exports = {
  configureWebpack:{
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 1024000,
        maxSize: 1024000,
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 3,
      })
    ]
  },
  productionSourceMap: false,
  publicPath: '/',
  runtimeCompiler: true,
};
