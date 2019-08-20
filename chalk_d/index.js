const chalk = require('chalk');
const chalkAnimation = require('chalk-animation')
const log = console.log
//添加颜色
log(chalk.red('red'))
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// 有背景色的console
log(`has backaground ${chalk.bgRed('redredred')}`)

chalkAnimation.rainbow('i am bo bo bo bo o bo b ob o bo b ob ob o bo b o')
