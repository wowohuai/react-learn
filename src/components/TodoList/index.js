import React from 'react'
import TodoItem from './todo-item'


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      input: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleDelete(index) {
    const list = this.state.list
    list.splice(index,1)
    this.setState ({
      list
    })
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
      <div>
         <div>
          <input placeholder="输入" onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.handleClick}>add</button>
        </div>
        <ul>{ this.getTodoItems() }</ul>
      </div>
    )
   
  }
}

export default TodoList