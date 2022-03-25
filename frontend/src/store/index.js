import { createStore, compose, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({})

const middlewares = [thunkMiddleware]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
