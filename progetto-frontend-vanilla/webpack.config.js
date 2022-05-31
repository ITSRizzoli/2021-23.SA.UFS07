const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        watchFiles: ['js/**/*.js', 'index.html', 'css/**/.css', 'img/**/*.png'],
        compress: true,
        port: 9000,
        host: "0.0.0.0", // needed on GitPod
        allowedHosts: "all", // needed on GitPod
        client: {
            webSocketURL: {
                // needed on GitPod because it proxy like
                // https://{port}-{gitpoduserhost}.gitpod.io
                port: 443,
            },
        }
    },
    entry: "./js/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path]/[name].[ext]",
                        },
                    },
                ]
            },
            {
                test: /\.(md)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path]/[name].[ext]",
                        },
                    },
                ]
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].min.js" // name of the generated bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: "body",
            scriptLoading: "blocking",
            scriptLoading: "blocking",
            templateParameters: {
                packageVersion: `v${process.env['PACKAGE_VERSION']}` || '',
                designSystemVersion: `ds${process.env['DESIGN_SYSTEM_VERSION']}` || '',
            }
        })
    ],
};
