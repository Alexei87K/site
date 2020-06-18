const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./src/index.js", // ВСЕ ТО ЧТО БЫЛО ДО ОБРАБОТКИ
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // ПОСЛЕ ОБРАБОТКИ
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
				test: /\.js$/,
				loader: 'babel-loader'
				//exclude: '/node_modules'
			},
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"],
        }),
      },
    ],
  },
  devServer: {
    // contentBase: './dist',
    hot: true,
		// overlay: true
	},
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    //   filename: "index.html",
    //   inject: true,
    // }),
    new ExtractTextPlugin("style.css"),
  ],
};
