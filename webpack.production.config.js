var webpack = require('webpack');//添加插件需要引入webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');//热加载插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');//分离css和js文件
// const TerserPlugin = require('terser-webpack-plugin');//压缩JS代码；
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');//压缩JS代码；
const {CleanWebpackPlugin} = require("clean-webpack-plugin");//去除build中的残余文件
module.exports = {
    devtool: 'eval-source-map',//调试代码工具source map cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
    entry: __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/build",//打包后文件存放的地方 __dirname是nodejs中的一个全局变量,他指向当前执行脚本所在的目录
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    devtool: 'null',//压缩打包代码
    // 本地服务器
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转,所有的跳转将指向index.html
        inline: true,//实时刷新
        hot: true
    },
    mode: 'development',//设置mode环境(生产/开发)
    performance: {//打包文件最大允许体积
        hints: false
    },
    optimization: {//压缩JS代码；
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /(\.css|\.scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: { localIdentName: '[name]-[local]' },//启用css module
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // new webpack.optimize.UglifyJsPlugin(),//压缩JS代码；
        new ExtractTextPlugin("style.css"),//分离CSS和JS文件
        new CleanWebpackPlugin()//去除build中的残余文件
    ]
}