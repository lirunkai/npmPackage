## react-transition-group

安装 

`yarn add react-transition-group`

使用

```
import { Transition, CSSTransition, TransitonGroup, SwitchTransition} from 'react-transition-group'
```

### CSSTransition

用于CSS动画过渡

`CSSTransition` 在组件淡入appear，进场enter,出场exit时，CSSTransition组件应用了一系列className名来对这些动作进行描述。首先appear被应用到组件className上，接着添加“active”类名来激活CSS动画。在动画完成后，原class改变为done表明组件动画已经应用完成并加载完成

**in**

开启和关闭动画

**classNames**

注意带**s**。 当组件被应用动画时，不同的动画状态(enter, exit)将作为className属性的后缀来拼接为新的className

比如`classNames='router'`， 会自动添加为`router-enter` `router-enter-active` `router-exit` `router-exit-active`

---

组件的回调函数们

**onEnter**

**onEntering**

**onEntered**

**onExit**

**onExiting**

**onExited**


### SwitchTransition

切换子CSSTransition组件. 

**mode**

默认为`out-in` 等oldComponent移除之后， 再加入newComponent

`in-out` 在newComponent进入之后删除oldComponent

**children**

CSSTransition组件