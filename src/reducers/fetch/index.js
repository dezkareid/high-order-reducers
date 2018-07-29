import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_RESET
} from '../../types'
import loadingReducer from './loading'
import successReducer from './success'
import errorReducer from './error'
import resetReducer from './reset'

const mapActionReducer = {
  [FETCH_LOADING]: loadingReducer,
  [FETCH_SUCCESS]: successReducer,
  [FETCH_ERROR]: errorReducer,
  [FETCH_RESET]: resetReducer
}
export default function fetchReducer (state = {}, action) {
  const { type } = action
  const reducer = mapActionReducer[type]
  return reducer ? reducer(state) : state
}
