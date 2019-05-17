
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
    mode: "development",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: ["src", "node_modules"]
    }
}

module.exports = {
    ...config,
    name: "server",
    target: "node",
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "build")
    }
}