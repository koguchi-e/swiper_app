const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    JQuery: 'jquery/src/jquery',
    Swiper: 'swiper/swiper-bundle'
  })
)

module.exports = environment
