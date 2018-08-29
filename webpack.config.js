// 内置插件
const Path = require("path");
// npm 外部安装插件
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.jsx",
        browse: "./src/js/browse.jsx"
    },
    output: {
        publicPath: "",
        path: Path.resolve(__dirname, "./dist"),
        filename: "./js/[name]-[chunkhash].js"
    },
    devServer: {
        contentBase: Path.join(__dirname, "./dist"),
        open: true,
        compress: true,
        host:"192.168.31.180",
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015","stage-3"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: __dirname + "/src/plugin/", to: "./plugin/"}
        ]),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "引导页",
            favicon: "./src/img/icon.ico",
            template: "./src/html/template.html",
            chunks:["index"],
            inject: "body",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: "browse.html",
            title: "浏览页",
            favicon: "./src/img/icon.ico",
            template: "./src/html/browse.html",
            chunks:["browse"],
            inject: "body",
            minify: {
                // removeComments: true,
                // collapseWhitespace: true
            }
        })
    ]
};