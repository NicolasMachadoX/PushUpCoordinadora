const dotenv = require('dotenv').config();
const Server = require('./models/Server');

const server = Server();

server.listen();