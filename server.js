const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('config');


const app = express()
const serverConfig = config.get('server');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


app.get('/', (req, res) => {
  console.log(serverConfig)
  res.send({msg: 'hello! Server is up and running'});
});

app.listen(serverConfig.port, () =>
  // debugger;
  console.log(`Example app listening on port ${serverConfig.port}!`)
)
