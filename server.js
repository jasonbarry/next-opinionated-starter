const port = 3000

const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(helmet())
    server.use(compression())

    // items in /static that should be root-level
    server.get('/:file(apple-touch-icon.png|favicon.ico|robots.txt)', (req, res) => {
      res.sendFile(`${__dirname}/static/${req.params.file}`)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}...`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
