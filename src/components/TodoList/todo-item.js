import React from 'react'


class TodoItem extends React.Component {
  // 子组件和父组件通信， 子组件需要调用父组件传递的方法
  handleDelete(index) {
    this.props.delete(index)
  }
  render() {
    return (
      <li onClick={() => {this.handleDelete(this.props.index)}}>
        {this.props.item}
      </li>
    )
  }
}

export default TodoItem