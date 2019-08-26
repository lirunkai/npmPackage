## better-scroll 

解决移动端各种滚动场景需求的插件.

[中文文档](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#startx)

BetterScroll 提供了一个类，实例化的第一个参数是一个原生的 DOM 对象。如果传递的是一个字符串，BetterScroll 内部会尝试调用 querySelector 去获取这个 DOM 对象。

```
import BScroll from 'better-scroll'

let wrapper = document.querySelector('.wrapper')

let scroll = new BScroll(wrapper, options)

```

### options

BScroll的配置项

`startX` Number 横轴方向初始化位置

`startY` Number 纵轴方向初始化位置

`scrollX` Boolean  如果为true, 横向滚动

`scrollY` Boolean  如果为true, 纵向滚动

`freeScroll` Boolean 如果为true, 不限制滚动方向

`probeType` 0 | 1 | 2 | 3 

有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件

`eventPassthrough` 有时候我们使用 BetterScroll 在某个方向模拟滚动的时候，希望在另一个方向保留原生的滚动（比如轮播图，我们希望横向模拟横向滚动，而纵向的滚动还是保留原生滚动，我们可以设置 eventPassthrough 为 vertical；相应的，如果我们希望保留横向的原生滚动，可以设置eventPassthrough为 horizontal

`click` Boolean 当设置为 true，BetterScroll 会派发一个 click 事件

`dblclick` Boolean | Object 派发双击点击事件。当配置成true的时候，默认2次点击的延时为300ms。 如果是对象, 可以修改delay

`bounce` Boolean 当滚动超过边缘的时候会有一小段回弹动画,设置为 true 则开启动画

`bounceTime` Number 设置回弹动画的动画时长

`momentum` 设置为true, 开始动画

`momentumLimitTime` Number 只有在屏幕上快速滑动的时间小于`momentumLimitTime`才能开启动画

`momentumLimitDistance` Number 只有在屏幕上快速滑动的时间大于`momentumLimitDistance` 才能开启动画

`swipeTime` Number 设置`moment`动画的时长



### 方法

`refresh`

重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常

`scrollTo(x, y, time, easing, extraTransform, isSilent)` 滚动到指定坐标

x 横坐标

y 纵坐标

time 滚动动画执行的时长(ms)

easing  缓动函数


`scrollBy(x, y, time, easing)` 相对于当前位置偏移滚动 x,y 的距离

`scrollToElement(el, time, offsetX, offsetY, easing)` 滚动到指定的目标元素

`stop` 立即停止当前运行的滚动动画

`enable` 启用 BetterScroll, 默认 开启

`disable` 禁用BetterScroll

`destroy` 销毁BetterScroll实例, 解绑事件

`on(type, fn, context)` 监听type类型

`once(type, fn, context)`

`off(type, fn)`  移除监听


### 钩子

```
const bs = new BScroll('.wrapper', {
  probeType: 3
})

bs.on('beforeScrollStart', () => {
  console.log('scrolling is ready to bootstrap')
})
```

`beforeScrollStart`  滚动开始之前

`scrollStart` 滚动开始时

`scroll` 滚动过程中, 参数{x,y}

`scrollCancel` 滚动被取消

`scrollEnd` 滚动结束, 参数{x,y}滚动结束时的位置

`touchEnd` 鼠标/手指离开

`flick` 轻拂时

`refresh`  refresh方法被调用后

`disable` bs 被禁用，即不再响应 DOM 事件

`enable` bs激活, 再次响应DOM事件

`destroy` destroy方法调用后