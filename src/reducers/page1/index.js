import { combineReducers } from 'redux'
import fetchReducer from '../fetch'

const page1Reducer = combineReducers({
  fetch: fetchReducer
})

export default page1Reducer
