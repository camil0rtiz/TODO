const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    output: {
        clean:true,
        filename:'main.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize:false,
                    sources: false,
                },
            
            },
            {
                test:/\.css$/i,
                exclude:/style.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/style.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],

    },

    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizer(),
            new Terser(),

        ]

    },


    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webpack app',
            template: './src/index.html',
            filename: './index.html',
            inject:'body',
        }),
        new MiniCssExtractPlugin({
            // filename: 'nuevo-estilo.css',
            // filename: '[name].[hash].css',
            filename: '[name].[hash].css',
            ignoreOrder:false,
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/", to: "assets" },
                // { from: "other", to: "public" },
            ],
        }),
    ]
    

    
}

