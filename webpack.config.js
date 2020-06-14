const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPrugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    // Si estamos en producción, cargará los archivos css dentro de js, si no, los cargará dentro su archivo css
                    devMode ? 'style-loader' : MiniCssExtractPrugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './frontend/index.html',
            // Innecesario, lo hace solo
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true,
            // }
        }),
        new MiniCssExtractPrugin({
            filename: 'css/bundle.css'
        })
    ],
    // En desarrollo, localizar la línea del error.
    devtool: 'source-map'
};