import { combineReducers } from 'redux'
import highFetchReducer from '../fetch'

const fetchReducer = highFetchReducer('PAGE1')
const page1Reducer = combineReducers({
  fetch: fetchReducer
})

export default page1Reducer
