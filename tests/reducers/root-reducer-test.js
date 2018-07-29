/* eslint-env jest */
import rootReducer from '../../src/reducers'
import { FETCH_LOADING } from '../../src/types'

describe('suite testing root reducer', () => {
  it('should return nextState with property page.fetch.loading:true', () => {
    const action = { type: FETCH_LOADING }
    const state = {}
    const nextState = rootReducer(state, action)
    expect(nextState.page1.fetch.loading).toBeTruthy()
  })
})
