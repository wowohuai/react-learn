import React from 'react'
import {  List } from 'antd'
import { connect } from 'react-redux'
import { getInputChangeValue, getAddTodoItem, getDeleteTodoItem } from '../../store/actions'

const TodoListPlus = (props) => {
  const { value, list, handleClick, handleDelete, handleInputChange } = props
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>add</button>
      <List
        style={{ width: '300px' }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleDelete(index)}>
            {item}
          </List.Item>
        )} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    value: state.value,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      dispatch(getInputChangeValue(e.target.value))
    },
    handleClick() {
      dispatch(getAddTodoItem())
    },
    handleDelete(index) {
      dispatch(getDeleteTodoItem(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPlus)