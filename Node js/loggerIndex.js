const Logger = require('./logger');
const logger =new Logger()
logger.on('message',data=>console.log('called Listener',data))
logger.log1("Hello world")
logger.log1('Happy day')
logger.log1('Super days')