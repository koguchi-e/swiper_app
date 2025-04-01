module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009'
      }
    })
  ]
};

