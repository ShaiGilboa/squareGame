const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// module.exports = {
//   plugins: [
//     tailwindcss,
//     autoprefixer,
//   ],
// };
console.log('testpostcss')

module.exports = {
  "plugins": [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
  ]
}