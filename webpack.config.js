const path = require('path')
const webpack = require('webpack')

// 用于插入打包后生成的html模板
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清除输出目录，免得每次手动删除
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        // 把全部给定的 path 片段连接到一起，并规范化生成的路径
        // 即入口文件目录设为，当前目录下的src/index.js
        index: path.join(__dirname,'src/index.js')
    },
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{}]
    },
    // mode: 'production',
    plugins: [],
    // 优化，很多插件的使用都转到这里了
    optimization:{
        splitChunks: {
            cacheGroups: {                 // 这里开始设置缓存的 chunks
                priority: "0",                // 缓存组优先级 false | object |
                vendor: {                   // key 为entry中定义的 入口名称
                    chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
                    name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1,       // 最大异步请求数， 默认1
                    maxInitialRequests: 1,    // 最大初始化请求书，默认1
                    reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }
    }
}