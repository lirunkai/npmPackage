## redux-thunk

只是一个中间件, 引入并且被`applyMiddleware`执行了之后就可以在dispatch中写异步的代码了

安装

`yarn add redux-thunk -S`

使用

```
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk))
```


