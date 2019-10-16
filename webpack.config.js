const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/(node_modules)/",
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/, 
                use: ["style-loader",
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',"sass-loader"
                ]
            },
            {
                test: /\.mp3$/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
          }),
    ]
};



module.exports = config;
