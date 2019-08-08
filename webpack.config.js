/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function(env) {
  const isProduction = env === "prod";
  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.[hash].js",
      path: isProduction ? `${__dirname}/docs` : `${__dirname}/dist`
    },

    devtool: "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "less-loader", // compiles Less to CSS
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },

    devServer: {
      contentBase: [path.join(__dirname, "dist")],
      compress: true,
      port: 9000
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
    ]
  };
};
