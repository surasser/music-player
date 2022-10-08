const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  lintOnSave: true,
  devServer: {
    open: false, // 是否自动弹出浏览器页面
    // host: '10.54.25.101', // 表示启动的时候使用的域名，默认可以不写，则是使用localhost和本机IP
    port: '8848' // 设置端口号
    // https: false, // 是否使用https协议
    // hotOnly: true, // 是否开启热更新
    // proxy: proxyConfig
  },
  configureWebpack: {
    // 别名
    resolve: {
      alias: {
        '@': resolve('src'),
        '@views': resolve('src/views'),
        '@styles': resolve('src/styles')
      }
    }
  }
}
