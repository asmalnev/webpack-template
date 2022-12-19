const
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'template.html'),
      filename: 'index.html'
    })
  ]
}