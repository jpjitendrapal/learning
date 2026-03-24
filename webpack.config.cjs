const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "bundle.js" : "bundle.[contenthash:8].js",
      publicPath: "/",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
              plugins: isDevelopment ? ["react-refresh/babel"] : [],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      hot: true,
      open: true,
      historyApiFallback: true,
      compress: true,
      port: 3000,
    },
    performance: {
      hints: false,
    },
  };
};
