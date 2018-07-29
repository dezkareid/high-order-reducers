/* eslint-env jest */
import loadingReducer from '../../../src/reducers/fetch/loading'

describe('suite testing loading reducer', () => {
  it('should return state with properties error:false, loading:true, success: false', () => {
    const state = loadingReducer()
    expect(state.error).toBeFalsy()
    expect(state.loading).toBeTruthy()
    expect(state.success).toBeFalsy()
  })
})
