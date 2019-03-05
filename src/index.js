import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer, { addCard } from './reducers'
import App from './components/App'

let store = createStore(rootReducer)
for (let i = 0; i < 9; i++) {
  store.dispatch(addCard())
}
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
