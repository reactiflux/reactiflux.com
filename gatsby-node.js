exports.modifyWebpackConfig = function(config, stage) {
  config.removeLoader('woff')
  config.loader('woff', {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file',
    query: {
      name: `static/[name].[hash:8].[ext]`,
    },
  })

  return config
}
