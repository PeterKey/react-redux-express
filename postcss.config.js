/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-cssnext')(),
  ],
}
