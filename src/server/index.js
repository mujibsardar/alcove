const express = require('express');

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config, db) => {
        let routes = require('../routes');
        // Setup
        // TODO
        // server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // Middleware
        server.use(express.json());

        // Database
        // TODO
        // mongoose.connect(
        //     db.database, ...
        // );

        // Routes
        routes.init(server);
    };

    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log('surveys-api running on port 3001');
        });
    };
    return {
        create: create,
        start: start
    };
};
