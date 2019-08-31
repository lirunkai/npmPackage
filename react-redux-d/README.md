## react-redux

install

`yarn add react-redux -S`

`react-redux` 是redux在react上的实现

`react-redux` 声明了UI组件和容器组件， 暴露出了`Provider` `connect`两个API

UI组件负责展示， 容器组件负责处理数据逻辑

### Provider

传递store, 方便子Component进行读取

### connect

用于从UI组件生成容器组件

`connect(mapStateToProps, mapDispatchToProps)(UI组件)`

```
import {connect} from 'react-redux'

const TodoListWrap = connect(mapStateToProps, mapDispatchToProps)(TodoList)
```

**mapStateToProps**

`mapStateToProps` 是一个函数, 接收(state，ownProps)作为参数，返回state(外部)映射到props(内部)的对象。

ownProps是容器本身的props

**mapDispatchToProps**

建立UI组件的参数到`store.dispatch`方法的映射, 定义了哪些方法可以触发action

`mapDispatchToProps` 接收两个参数(dispatch, ownProps)

**dispatch**  等同于`store.dispatch`

**ownProps**  容器组件的props

```
const mapDispatchToProps = (dispatch, props) => {
    onClick: () => {
        let action = {type: 'add', data: 1}
        dispatch(action)
    }
}
```


