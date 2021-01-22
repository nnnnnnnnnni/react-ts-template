import path from "path";

export const dev = {
  assetsPublicPath: "/",
  proxyTable: {},
  host: "localhost",
  port: 8000,
};

export const prod = {
  assetsPublicPath: "./",
  assetsRoot: path.resolve(__dirname, "..", "dist"),
  bundleAnalyzerReport: false,
};
