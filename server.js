// The Server
const server = require('./src/server')();
// The Configuration for the Server
const config = require('./src/config');
// TODO Database connection details go here
const db = require('./src/database');

// Create Server
server.create(config, db);

// Start Server
server.start();
