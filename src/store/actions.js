import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEEM, INIT_LIST, GET_TODO_LIST } from './action-types'

export const getInputChangeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEEM,
  index
})

export const initList = (list) => ({
  type: INIT_LIST,
  list
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then(res => {
      const { data } = res
      dispatch(initList(data))
    })
  }
}

export const getTodoListSaga = () => ({
  type: GET_TODO_LIST
})