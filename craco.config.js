const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
// https://github.com/DocSpring/craco-antd
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    webpack: {
        plugins: [
          new WebpackBar({ profile: true }),
          ...(process.env.NODE_ENV === "development"
            ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
            : []),
 //           https://ant.design/docs/react/use-with-create-react-app
 //           new AntdDayjsWebpackPlugin() enable it later using momentjs 
        ]
      },
      plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
              customizeThemeLessPath: path.resolve(__dirname,'./src/style/AntDesign/customTheme.less')
            }
        }
    ]
};