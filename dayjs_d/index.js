const dayjs = require('dayjs')
const chalk = require('chalk')
const log = console.log

log(chalk.bgYellow('get'))
log(chalk.blue(`${dayjs()}`))
log(chalk.yellow(dayjs().format('YYYY-MM-DD')))
log(chalk.red(dayjs().year()))
log(chalk.red(dayjs().month()))
log(chalk.red(dayjs().date()))
log(chalk.red(dayjs().day()))
log(chalk.red(dayjs().minute()))

log(chalk.bgBlue('setting'))
log(chalk.red(dayjs().set('month', 3)))
log(chalk.red(dayjs().set('date', 3)))