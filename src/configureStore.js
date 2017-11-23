import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../state/rootReducer'

const middlewares = []
if (!process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger')

  middlewares.push(logger)
}

// eslint-disable-next-line no-underscore-dangle, no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}
