## Redux

一个全局状态管理包, 简要说下使用。 

安装

`yarn add redux -S`

### Store

存储state的地方. 整个应用只有一个store

创建store

```
import {createStore} from 'redux'

let store = createStore(function(state, actions){})
```

### State

state就是数据. 

获取数据 `store.getState(stateKey)`

### Action

用户不能直接接触state, 需要通过action来通知state需要修改了

```
let action = {
    type: 'add', // 必须携带一个type
    data: 1  // 传递的数据
}
store.dispatch(action) // 通过dispatch发出action
```
### Reducer

`Store`接收到action之后，必须给一个新的state。 这个计算state的过程就是reducer, 也就是说reducer来接收action, 并处理传递过来的参数返回一个新的state

```
function reducer(state, action){
    switch(active.type) {
        case 'add'
            return JSON.parse(JSON.stringify(state)) + active.data
    }
}

//创建store的时候传入reducer

import {createStore} from 'redux'
import reducer from './reducer'

let store = createStore(reducer)
```



