import baseWebpackConfig from "./webpack.base";
import { resolve } from "./utils";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";

export default merge(baseWebpackConfig, {
  mode: "production",
  output: {
    path: resolve("dist"),
    filename: "js/index.[contenthash:8].js",
    chunkFilename: "js/[name].[contenthash:8].js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]",
                exportLocalsConvention: "camelCase",
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve("/dist/index.html"),
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: "auto",
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve("public"),
          to: "public",
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      minRemainingSize: 0,
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    removeAvailableModules: true,
    minimize: true,
  },
  performance: {
    hints: "error",
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
});
