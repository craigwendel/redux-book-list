import {createStore} from 'redux'
import reducers from '../reducers'

const store = createStore(reducers)
store.subscribe(() => {
  const state = store.getState()
  console.log('state', state)
})

store.dispatch({type: '@@INIT'})

export default store
