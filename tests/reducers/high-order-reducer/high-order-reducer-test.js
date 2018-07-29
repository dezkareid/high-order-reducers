/* eslint-env jest */
import highOrderReducer from '../../../src/reducers/high-order-reducer'
import fetchReducer from '../../../src/reducers/fetch'
import { FETCH_LOADING } from '../../../src/types'

describe('suite testing high order reducer', () => {
  it('should return a function', () => {
    const reducer = highOrderReducer('xreducer', fetchReducer)
    expect(reducer).toBeTruthy()
  })

  it('should return a new reducer, the reducer must return state with loading true if action key match', () => {
    const key = 'xreducer'
    const meta = { key }
    const reducer = highOrderReducer(meta, fetchReducer)
    const action = { type: FETCH_LOADING, key }
    const state = {}
    const nextState = reducer(state, action)
    expect(nextState.loading).toBeTruthy()
  })

  it('should return a new reducer, the reducer must return state empty if action key dont match', () => {
    const meta = {key: 'xreducer'}
    const reducer = highOrderReducer(meta, fetchReducer)
    const action = { type: FETCH_LOADING }
    const state = {}
    const nextState = reducer(state, action)
    expect(nextState).toEqual(state)
  })
})
