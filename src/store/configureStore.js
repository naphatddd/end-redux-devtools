import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'modules/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
function configureStore(initialState) {
    const logger = createLogger({
        timestamp: true
    })
  const middleware = [logger]
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return store
}

export default configureStore
