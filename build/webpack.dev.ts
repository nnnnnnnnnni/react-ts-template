import baseWebpackConfig from "./webpack.base";
import { dev } from "./config";
import { resolve } from "./utils";
import { HotModuleReplacementPlugin } from "webpack";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default merge(baseWebpackConfig, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', "less-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', "scss-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    clientLogLevel: "warning",
    historyApiFallback: true,
    contentBase: false,
    compress: true,
    host: 'localhost' || dev.host || process.env.HOST,
    port: 8080 || dev.port || process.env.PORT,
    publicPath: dev.assetsPublicPath,
    overlay: true,
    hot: true,
    inline: true,
    open: true,
    proxy: dev.proxyTable,
    watchOptions: {
      poll: false,
    },
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true,
    }),
    // copy custom static assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve("public"),
          to: "public",
        },
      ],
    }),
  ],
});
