/* eslint-env jest */
import highFetchReducer from '../../../src/reducers/fetch'

describe('suite testing fetch reducer', () => {
  it('should return nextState with property loading:true', () => {
    const fetchReducer = highFetchReducer('FOO')
    const action = { type: 'FETCH_FOO_LOADING' }
    const state = {}
    const nextState = fetchReducer(state, action)
    expect(nextState.loading).toBeTruthy()
  })
})
