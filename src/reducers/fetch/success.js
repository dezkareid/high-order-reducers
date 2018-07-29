const successState = {
  loading: false,
  success: true,
  error: false
}
export default function successReducer (state = {}) {
  return { ...state, ...successState }
}
