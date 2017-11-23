const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

if (!process.argv.includes('--env.release')) {
  const config = (process.argv.includes('--env.production'))
    ? require('../webpack.prod.js')
    : require('../webpack.dev.js')

  const compiler = require('webpack')(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  console.log('Middleware loaded.')
}


// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/index.html'))
// })

app.use(express.static('public'))

app.listen(port)
console.log(`Server started on port ${port}`)
