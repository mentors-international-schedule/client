const path = require('path');
const express = require('express');

const server = express();

server.use('/app/', express.static(path.join(__dirname, 'app', 'build')));
server.get('/app/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
});
server.use('/', express.static(path.join(__dirname, 'landing')));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on ${port}`));
