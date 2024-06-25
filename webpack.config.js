// webpack.config.js
const path = require('path');

module.exports = {
  // Остальная конфигурация webpack...

  module: {
    rules: [
      // Правило для обработки файлов .scss и .module.scss
      {
        test: /\.(scss|module\.scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]', // Настройка имен классов для модульных стилей
              },
            },
          },
          'sass-loader', // Добавляем sass-loader для обработки файлов Sass
        ],
      },
    ],
  },
};
