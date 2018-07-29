const loadingState = {
  loading: true,
  success: false,
  error: false
}

export default function loadingReducer (state = {}) {
  return { ...state, ...loadingState }
}
