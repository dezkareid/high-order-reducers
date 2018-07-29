import { combineReducers } from 'redux'
import fetchReducer from '../fetch'

const page2Reducer = combineReducers({
  fetch: fetchReducer
})

export default page2Reducer
