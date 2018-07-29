/* eslint-env jest */
import errorReducer from '../../../src/reducers/fetch/error'

describe('suite testing error reducer', () => {
  it('should return state with properties error:true, loading:false, success: false', () => {
    const state = errorReducer()
    expect(state.error).toBeTruthy()
    expect(state.loading).toBeFalsy()
    expect(state.success).toBeFalsy()
  })
})
