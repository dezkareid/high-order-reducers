import { combineReducers } from 'redux'
import page1Reducer from './page1'

const rootReducer = combineReducers({
  page1: page1Reducer
})

export default rootReducer
