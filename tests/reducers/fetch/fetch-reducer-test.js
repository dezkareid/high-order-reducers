/* eslint-env jest */
import fetchReducer from '../../../src/reducers/fetch'
import { FETCH_LOADING } from '../../../src/types'
describe('suite testing fetch reducer', () => {
  it('should return nextState with property loading:true', () => {
    const action = { type: FETCH_LOADING }
    const state = {}
    const nextState = fetchReducer(state, action)
    expect(nextState.loading).toBeTruthy()
  })
})
