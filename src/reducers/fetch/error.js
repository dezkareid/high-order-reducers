const errorState = {
  loading: false,
  success: false,
  error: true
}
export default function errorReducer (state = {}) {
  return { ...state, ...errorState }
}
