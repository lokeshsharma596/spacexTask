const withCSS = require('@zeit/next-css')
module.exports = withCSS()

const withImages = require('next-images')
module.exports = withImages()


module.exports = {
    devIndicators: {
      autoPrerender: false,
    },
  }


//   module.exports = {
//     env: {
//       API_URL:'https://api.spaceXdata.com/v3/launches'
//     },
//   }