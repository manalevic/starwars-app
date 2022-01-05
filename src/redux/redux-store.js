import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import charactersReducer from './characters-reducer'

let reducers = combineReducers({
    charactersPage: charactersReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store