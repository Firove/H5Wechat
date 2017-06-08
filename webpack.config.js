var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //多页面传对象,单页面传数组或字符串
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src")],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest']
                        }
                    }
                ]
            },{
                test: /\.css$/,
                include: [path.resolve(__dirname, "src")],
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader:  'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader:  'postcss-loader'
                    },
                ]
            },{
                test: /\.less$/,
                include: [path.resolve(__dirname, "src")],
                use: [
                    {
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader'
                    },{
                        loader: 'postcss-loader'
                    },{
                        loader: 'less-loader'
                    }
                ]
            },{
                test: /\.html$/,
                include: [path.resolve(__dirname, "src")],
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },{
                test: /\.(jpg|jpeg|png|gif)$/,
                include: [path.resolve(__dirname, "src")],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2000,
                            name: 'img/[hash:8].[name].[ext]'
                        }
                    },{
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin ({
            // 这里有个上下文context，默认是根目录
            // 插件的输出是output的path
            template: 'index.html',
            filename: 'index.html',
            title: 'a',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}