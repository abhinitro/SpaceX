// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// const port =  4004

// app.use(express.static(path.join(__dirname, 'out')));
// console.log(__dirname);
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'out', 'index.html'));
// });

// app.listen(port,console.log("port running on",port));

const { createServer } = require('http')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 4004
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = new URL(req.url, 'http://w.w')
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})