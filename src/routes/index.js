const api = require('./api');

const init = (server) => {
    // Log every incoming request
    server.get('*', function (req, res, next) {
        console.log('Incoming request to: ' + req.originalUrl);
        return next();
    });

    server.get('/', function (req, res, next) {
        res.send('Please visit my private repo for more instructions: https://github.com/mujibsardar/alcove')
        return next();
    });

    server.use('/api', api);
}
module.exports = {
    init: init
};
