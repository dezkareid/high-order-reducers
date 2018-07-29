/* eslint-env jest */
import rootReducer from '../../src/reducers'

describe('suite testing root reducer', () => {
  it('should return nextState with property page1.fetch.loading:true', () => {
    const action = { type: 'FETCH_PAGE1_LOADING' }
    const state = {}
    const nextState = rootReducer(state, action)
    expect(nextState.page1.fetch.loading).toBeTruthy()
  })

  it('should return nextState with property page1.fetch.loading:true and page2.fetch.loading:false', () => {
    const action = { type: 'FETCH_PAGE1_LOADING' }
    const state = {}
    const nextState = rootReducer(state, action)
    expect(nextState.page1.fetch.loading).toBeTruthy()
    expect(nextState.page2.fetch.loading).toBeFalsy()
  })
})
