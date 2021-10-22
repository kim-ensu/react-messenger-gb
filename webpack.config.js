const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js",
		publicPath: '/',
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(__dirname, "public", "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};