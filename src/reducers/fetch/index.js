import loadingReducer from './loading'
import successReducer from './success'
import errorReducer from './error'
import resetReducer from './reset'

export default function highOrderFetch (sectionName) {
  const mapActionReducer = {
    [`FETCH_${sectionName}_LOADING`]: loadingReducer,
    [`FETCH_${sectionName}_SUCCESS`]: successReducer,
    [`FETCH_${sectionName}_ERROR`]: errorReducer,
    [`FETCH_${sectionName}_RESET`]: resetReducer
  }

  return function fetchReducer (state = {}, action) {
    const { type } = action
    const reducer = mapActionReducer[type]
    return reducer ? reducer(state) : state
  }
}
