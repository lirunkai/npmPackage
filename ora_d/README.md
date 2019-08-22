## ora

一个终端loading

![](https://raw.githubusercontent.com/sindresorhus/ora/HEAD/screenshot-2.gif)

```
let ora = require('ora')
let spinner = ora('写点自己想写的文字')
// 开始旋转
spinner.start()

setTimeout(() => {
    结束旋转
    spinner.stop()
}, 3000)
```

## loaing的类型

**moon**  月亮的动态
**runner** 奔跑的人
**earth**  旋转的地球
**clock** 时钟

[more](https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json)