## chalk

给命令行增加颜色,突出展示

## 字体颜色

```
const chalk = require('chalk')
const log = console.log

log(chalk.red('red'))
log(chalk.blue('blue'))
```

**black**
**red**
**green**
**yellow**
**blue**
**white**
**redBright**
**greenBright**
**yellowBright**

or 

`chalk.rgb(10, 100, 200)`
`chalk.hsl(32, 100, 50)`
`chalk.hex('#FF8800')`


## 背景颜色

```
const chalk = require('chalk')
const log = console.log
log(chalk.bgRed('bgRed'))
log(chalk.bgBlue('bgBlue'))
```

## 特殊样式

```
const chalk = require('chalk')
const log = console.log

log(chalk.bold('bold'))
log(chalk.underline('underline'))
```

**bold**
**underline**
**hidden**
**bold**
**bold**
**bold**
**bold**


## 串行调用

`chalk.bold.red.bgRed('hello')`