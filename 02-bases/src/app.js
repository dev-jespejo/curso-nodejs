
const {buildLogger} = require('./plugins/index');


const logger = buildLogger('app.js');

logger.log('Hola mundo');

