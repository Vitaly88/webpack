const path = require("path");
// const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
console.log(isDev);

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",

  // indicates which module webpack should use to begin building dependency graph
  entry: {
    main: ["@babel/polyfill", "./index.jsx"],
    analytics: "./analytics.js",
  },

  // tells where to emit the bundle it creates
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  //settings for webpack-dev-server
  devServer: {
    port: 3000,
    hot: isDev,
  },

  devtool: isDev ? "source-map" : "",

  //aliases for different types of files
  resolve: {
    extensions: [".js", ".json", ".png"],
    alias: {
      models: path.resolve(__dirname, "./src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },

  // it generates files and removes them depending on the purposes after each build
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  // module can add types of files and process them
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        include: [path.resolve(__dirname, "./assets/fonts")],
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: ["babel-loader", "eslint-loader"],
    //       options: {
    //         presets: ["@babel/preset-env"],
    //         plugins: ["@babel/plugin-proposal-class-properties"],
    //       },
    //     },
    //   }
    ],
  },
};
