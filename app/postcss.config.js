const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postCssImport = require('postcss-import')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    postCssImport,
  ],
};
console.log('testpostcss')


// module.exports = {
//   "plugins": [
//     require('tailwindcss')('tailwind.js'),
//     require('autoprefixer')(),
//   ]
// }