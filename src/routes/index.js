const api = require('./api');

const init = (server) => {
    // Log every incoming request
    server.get('*', function (req, res, next) {
        console.log('Incoming request to: ' + req.originalUrl);
        return next();
    });

    server.use('/api', api);
}
module.exports = {
    init: init
};
