/* eslint-env jest */
import successReducer from '../../../src/reducers/fetch/success'

describe('suite testing success reducer', () => {
  it('should return state with properties error:false, loading:false, success: true', () => {
    const state = successReducer()
    expect(state.error).toBeFalsy()
    expect(state.loading).toBeFalsy()
    expect(state.success).toBeTruthy()
  })
})
