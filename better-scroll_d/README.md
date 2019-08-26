## better-scroll 

解决移动端各种滚动场景需求的插件.

BetterScroll 提供了一个类，实例化的第一个参数是一个原生的 DOM 对象。如果传递的是一个字符串，BetterScroll 内部会尝试调用 querySelector 去获取这个 DOM 对象。

```
import BScroll from 'better-scroll'

let wrapper = document.querySelector('.wrapper')

let scroll = new BScroll(wrapper)

```