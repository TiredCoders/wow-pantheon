const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Config directories
const SRC_DIR = path.resolve(__dirname, "src");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
	entry: SRC_DIR + "/frontend/index.jsx",
	output: {
		path: OUTPUT_DIR,
		publicPath: "./",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
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
	target: "electron-renderer",
	plugins: [
		new HtmlWebpackPlugin({
			template: SRC_DIR + "/frontend/index.html",
			inject: "body",
		}),
		new MiniCssExtractPlugin({
			filename: "bundle.css",
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		new MinifyPlugin(),
	],
	stats: {
		colors: true,
		children: false,
		chunks: false,
		modules: false,
	},
};
