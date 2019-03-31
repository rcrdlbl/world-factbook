import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import visits from './reducers/visitsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  visits
})

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
)
