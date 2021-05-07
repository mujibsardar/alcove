const env = process.env.NODE_ENV || 'local';

const envConfig = require('./' + env);

module.exports = envConfig;
