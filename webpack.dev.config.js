const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { spawn } = require("child_process");

// Config directories
const SRC_DIR = path.resolve(__dirname, "src");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

module.exports = {
	entry: SRC_DIR + "/frontend/index.jsx",
	output: {
		path: OUTPUT_DIR,
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "less-loader", // compiles Less to CSS
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: "babel-loader",
					},
				],
				exclude: /node_modules/,
				resolve: {
					extensions: [".js", ".jsx"],
				},
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]",
					},
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]",
					},
				],
			},
		],
	},
	target: "web",
	plugins: [
		new HtmlWebpackPlugin({
			template: SRC_DIR + "/frontend/index.html",
			inject: "body",
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development"),
		}),
	],
	devtool: "cheap-source-map",
	devServer: {
		contentBase: OUTPUT_DIR,
		host: "0.0.0.0",
		port: 8082,
		hot: true,
		stats: {
			colors: true,
			chunks: false,
			children: false,
		},
		before() {
			spawn("electron", ["."], {
				shell: true,
				env: process.env,
				stdio: "inherit",
			})
				.on("close", (code) => process.exit(0))
				.on("error", (spawnError) => console.error(spawnError));
		},
	},
};
