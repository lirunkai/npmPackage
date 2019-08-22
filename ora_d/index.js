// 优雅转轮
const ora = require('ora')

//创建实例

// let spinner = ora('旋转跳跃')

// //开始旋转
// spinner.start()

// setTimeout(() => {
//     // 停止旋转
//     spinner.stop()
// }, 3000)

let spinnerType = ora({
    text: 'moon',
    spinner: 'moon'
})

spinnerType.start()

setTimeout(() => {
    spinnerType.stop()
}, 4000)