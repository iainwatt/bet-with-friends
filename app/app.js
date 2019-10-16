const express = require('express')
const app = express()

const config = require('config');
const serverConfig = config.get('server');
const routes = require('./routes');


app.get('/', function (req, res) {
  console.log(serverConfig)
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(serverConfig.port, () =>
  // debugger;
  console.log(`Example app listening on port ${serverConfig.port}!`)
)
