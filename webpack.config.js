const path = require('path');
module.exports = () => {
  return {
    entry: [
      './dist/commercetool/browser/main.js', 
    ],
    output: {
      filename: 'custom-angular-widget.js',
      path: path.resolve(__dirname, 'dist/commercetool'),
    },
    externals: {
      'zone.js': 'Zone' // 🚀 Exclude zone.js from final bundle
    },
    mode: 'production'
  }
};
