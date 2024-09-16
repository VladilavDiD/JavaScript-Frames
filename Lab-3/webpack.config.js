const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lab-app/src/app.ts', // Вхідний файл
  output: {
    filename: 'bundle.js', // Файл, який буде створений після збірки
    path: path.resolve(__dirname, 'dist'), // Папка, в яку буде зібраний проект
    clean: true, // Очищення папки dist перед новою збіркою
  },
  resolve: {
    extensions: ['.ts', '.js'], // Підтримка TypeScript та JavaScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Шлях до твого HTML-файлу
      filename: 'index.html',   // Ім'я HTML-файлу в папці dist
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка з готовими файлами
    },
    compress: true,
    port: 8080,
    open: true,  // Автоматично відкривати браузер при старті сервера
  },
  mode: 'development',
};
