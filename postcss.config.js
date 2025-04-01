environment.loaders.get('sass').use.find(el => el.loader === 'postcss-loader').options = {
  postcssOptions: {
    plugins: [
      require('postcss-import'),
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: { flexbox: 'no-2009' },
        stage: 3
      })
    ]
  }
}
