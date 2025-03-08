const path = require('path');
module.exports = () => {
  return {
    entry: [
      './dist/commercetool/browser/main.js', 
      './dist/commercetool/browser/polyfills.js', 
    ],
    output: {
      filename: 'custom-element-angular-widget.js',
      path: path.resolve(__dirname, 'dist/commercetool'),
    },
    mode: 'production'
  }
};
