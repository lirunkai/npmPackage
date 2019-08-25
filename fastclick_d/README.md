## fastclick

移动浏览器为什么会有300ms的等待时间？？

这与关系到双击缩放，双击缩放，即用手指在屏幕上快速点击两次，可以看到内容或者图片放大，再次双击，浏览器会将网页缩放至原始比例。
浏览器捕获第一次单击后，会先等待一段时间，如果在这段时间区间里用户未进行下一次点击，则浏览器会做单击事件的处理。如果这段时间里用户进行了第二次单击操作，则浏览器会做双击事件处理。这段时间就是上面提到的300毫秒延迟

fastclick解决了整个问题。 fastclick模拟触发一个模拟click事件, 将真正300ms触发的click事件阻止掉

## 使用

### 下载

`yarn add fastclick -S`

### 项目中引用

```
import fastclick from 'fastclick'

fastclick.attach(document.body)
```

