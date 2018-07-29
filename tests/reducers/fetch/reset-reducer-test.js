/* eslint-env jest */
import resetReducer from '../../../src/reducers/fetch/reset'

describe('suite testing reset reducer', () => {
  it('should return state with properties error:false, loading:false, success: false', () => {
    const state = resetReducer()
    expect(state.error).toBeFalsy()
    expect(state.loading).toBeFalsy()
    expect(state.success).toBeFalsy()
  })
})
