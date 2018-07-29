import { combineReducers } from 'redux'
import fetchReducer from '../fetch'
import HighOrderReducer from '../high-order-reducer'

const meta = { initialState: {}, key: 'page2-fetch-reducer' }
const newFetchReducer = HighOrderReducer(meta, fetchReducer)
const page2Reducer = combineReducers({
  fetch: newFetchReducer
})

export default page2Reducer
