## react-router-dom

安装

`yarn add react-router-dom`

使用

```
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;

```

match参数获取**

`params` `url` `isExact` `path`

**跳转**

`props.history.push('/')`

**Redirect** 重定向

**Link** 一个点击可跳转的组件

**NavLink** 可以修改Link的样式

**BrowserRouter** 提供一个Provider

**Route** 配置展示的route

**Switch** 检索到第一个匹配的route进行展示

注意给`to='/'`添加`exact` 否则进不去其他的路由.

**HashRouter**

**withRouter(component)** 传入的props有修改组件会重新渲染

