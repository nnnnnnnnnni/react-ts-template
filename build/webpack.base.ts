import path from "path";
import { resolve } from "./utils";
import { Configuration } from "webpack";

const devMode = process.env.NODE_ENV !== "production";

const baseWebpackConfig: Configuration = {
  context: path.resolve(__dirname, ".."),
  entry: "./src/main.tsx",
  output: {
    path: resolve("dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "ts-loader",
        include: [resolve("src"), resolve("test")],
        options: {
          appendTsSuffixTo: [/\.css$/]
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "media/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "fonts/[name].[hash:7].[ext]",
        },
      },
    ],
  },
};

export default baseWebpackConfig