const express = require('express'),
  app = express(),
  cors = require('cors'),
  logger = require('morgan'),
  bodyParser = require('body-parser');


// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('./routes')(app);

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));


