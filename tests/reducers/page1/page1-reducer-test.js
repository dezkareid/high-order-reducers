/* eslint-env jest */
import page1Reducer from '../../../src/reducers/page1'

describe('suite testing page1 reducer', () => {
  it('should return nextState with property fetch property and subproperty loading:true', () => {
    const action = { type: 'FETCH_PAGE1_LOADING' }
    const state = {}
    const nextState = page1Reducer(state, action)
    expect(nextState.fetch.loading).toBeTruthy()
  })
})
