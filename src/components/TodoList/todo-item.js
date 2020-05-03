import React from 'react'
import PropTypes from 'prop-types'


class TodoItem extends React.Component {
  // 子组件和父组件通信， 子组件需要调用父组件传递的方法
  handleDelete(index) {
    this.props.delete(index)
  }
  // 父组件render时，子组件不会重新render
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.item , this.props.item)
    if(nextProps.item !== this.props.item) {
      return true
    }
    return false
  }
  // 当组件的props或state发生改变的时候，render函数会重新执行
  render() {
    console.log('child render')
    return (
      // dangerouslySetInnerHTML不对输入框的内容进行转义
      <li onClick={() => {this.handleDelete(this.props.index)}} dangerouslySetInnerHTML={{__html: this.props.item}}/>
    )
  }
}

TodoItem.propTypes  = {
  index: PropTypes.number.isRequired,
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  delete: PropTypes.func
}

export default TodoItem