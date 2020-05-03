import React from 'react'
import TodoItem from './todo-item'
import UI from './UI'
import store from '../../store'
import axios from 'axios'
import { 
  getInputChangeValue, 
  getAddTodoItem, 
  getDeleteTodoItem, 
  getTodoList, 
  initList,
  getTodoListSaga 
} from '../../store/actions'

//容器组件
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleClick() {
    // this.setState((prevState) => ({
    //   list: [...prevState.list, prevState.input],
    //   input: ''
    // }))
    // 提交action
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    store.dispatch(getAddTodoItem())
  }
  handleChange(e) {
    const value = e.target.value
    //使用ref
    // const value = this.input.value
    // this.setState(() => ({
    //   input: value
    // }))
    // 改变store
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    store.dispatch(getInputChangeValue(value))

  }
  handleDelete(index) {
    // this.setState((prevState) => {
    //   const { list } = prevState
    //   list.splice(index, 1)
    //   return { list } 
    // })
    // const action = {
    //   type: DELETE_TODO_ITEEM,
    //   index
    // }
    store.dispatch(getDeleteTodoItem(index))
  }
  getTodoItems() {
    return (
      this.state.list.map((item, index) =>
        <TodoItem item={item} key={index} index={index} delete={this.handleDelete} />
      )
    )
  }
  render() {
    return (
     <UI 
        value={this.state.value}
        list = {this.state.list}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleDelete={this.handleDelete}
     />
    )
  }
  componentDidMount() {
    // thunk中间件
    // store.dispatch(getTodoList())

    // saga中间件  reduce和saga都会接收到action
    store.dispatch(getTodoListSaga())
  }
}

export default TodoList