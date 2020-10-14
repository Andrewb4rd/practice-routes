const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/one', function(req, res, next) {
  const responseObj = { data: 'You clicked the first button' };
  res.send(responseObj);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
