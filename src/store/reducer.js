import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEEM, INIT_LIST} from './action-types'


const defaultState = {
  list: [1,2],
  value: ''
}


export default (state = defaultState, action) => {
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.list
    return newState
  }
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.value = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)) 
    newState.list.push(newState.value)
    newState.value = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
   return state
}