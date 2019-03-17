const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
    },
    entry: path.join(__dirname, "src/js/bootstrap.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: "index.html",
            inject: "body",
        }),
    ],
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".js"],
        enforceExtension: false,
        alias: {
            libs: path.resolve(__dirname, "./src/js/libs/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/, /public/],
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
