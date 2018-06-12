import {createStore,combineReducers,applyMiddleware} from "redux";
import {Login} from "./reducers/login";
import {createLogger} from "redux-logger"
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
let logger = createLogger()
let reducer = combineReducers({
    Login
})

let store = createStore(reducer,applyMiddleware(promiseMiddleware,thunk,logger));

export default store