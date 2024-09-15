const path = require('path');

module.exports = {
  entry: './lab-app/src/app.ts', // Вхідний файл
  output: {
    filename: 'bundle.js', // Файл, який буде створений після збірки
    path: path.resolve(__dirname, 'dist'), // Папка, в яку буде зібраний проект
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Шлях до папки, де зберігається зібраний код
    },
    compress: true,
    port: 8080,
  },
  mode: 'development', // Додайте цей параметр, щоб уникнути попередження
};
