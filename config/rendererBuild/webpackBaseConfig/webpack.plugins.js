const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');



module.exports = [
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [`You application is running here http://localhost:${process?.env?.PORT || 3000}`],
    },
    clearConsole: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].css',
  }),
];
