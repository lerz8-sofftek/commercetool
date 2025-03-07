const path = require('path');

module.exports = {
  entry: './dist/commercetool/browser/main.js',
  output: {
    filename: 'custom-angular-widget.js',
    path: path.resolve(__dirname, 'dist/commercetool'),
  },
  mode: 'production'
};
