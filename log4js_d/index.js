const log4Js = require('log4js')
const logger = log4Js.getLogger()

logger.level = 'debug'
logger.debug("Some debug message")


log4Js.configure({
    appenders: { cheese: {type: 'file', filename: 'cheese.log'}},
    categories: { 
        default: {appenders: ['cheese'], level: 'error'}}
})
// level 从低到高
const cheeseLogger = log4Js.getLogger('cheese')
logger.trace('Entering cheese testing')
logger.debug('got cheese')
logger.info('Cheese is comte')
logger.warn('Cheese is quite smelly')
logger.error('Cheese is to repe')
logger.fatal('Cheese was breding ground for listerial')