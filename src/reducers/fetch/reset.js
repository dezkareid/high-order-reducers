const resetState = {
  loading: false,
  success: false,
  error: false
}
export default function resetReducer (state = {}) {
  return { ...state, ...resetState }
}
