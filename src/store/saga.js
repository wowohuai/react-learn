import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { initList } from './actions'
import { GET_TODO_LIST } from './action-types'

function *getInitList() {
  try{
     const { data } = yield axios.get('/api/todolist')
    yield put(initList(data))
  }catch(e) {
    console.log(e)
  }
 
}

function *todoSagas() {
  yield takeEvery(GET_TODO_LIST, getInitList)
}

export default todoSagas