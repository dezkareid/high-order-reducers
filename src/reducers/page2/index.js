import { combineReducers } from 'redux'
import highFetchReducer from '../fetch'

const fetchReducer = highFetchReducer('PAGE2')

const page2Reducer = combineReducers({
  fetch: fetchReducer
})

export default page2Reducer
