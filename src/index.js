import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { TodoList } from './components'
//动态引入   React.lazy 目前只支持默认导出（default exports）
const ContextApp = React.lazy(() => import('./context'))
const Exercise = React.lazy(() => import('./exercise'))

function MyComponent() {
  return (
    <Router>
      {/* fallback 属性接受任何在组件加载过程中你想展示的 React 元素。 */}
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route exact path="/" component={Exercise} />
          <Route  path="/context" component={ContextApp} />
          <Route  path="/todoList" component={TodoList} />
        </Switch>
      </Suspense>
    </Router>
  )
}
// ========================================

ReactDOM.render(
  // <Game />,
  <MyComponent />,
  document.getElementById('root')
);


