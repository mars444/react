const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: ['node_modules'],
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'store.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new miniCss({
            filename: 'main.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                // use: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
                use: [
                    {
                        loader: 'url-loader',
                        options:
                            { // Параметр опции option здесь может определить размер изображения, которое должно быть преобразовано в base64
                                name: '[name].[ext]',
                                limit: 50000, // Указывает, что изображения размером менее 50 КБ преобразуются в base64, а изображения размером более 50 КБ являются путями
                                outputPath: 'images' // Определяем папку выходного изображения
                            }
                    },

                ]
            },




            {
                test: /\.css/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'postcss-loader',
                ],
                sideEffects: true
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },



        ],
    },

};
