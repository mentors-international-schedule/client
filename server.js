const path = require('path');
const express = require('express');

server = express();

server.use('/app', express.static(path.join(__dirname, 'app/build')));
server.use('/', express.static(path.join(__dirname, 'landing')));

const port = process.env.port || 3000;
server.listen(port, () => console.log(`Listening on ${port}`));
