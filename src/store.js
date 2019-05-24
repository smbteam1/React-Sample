import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { navReducer, navigationmiddleware } from "./AppWithNavigationState";
import ReduxThunk from 'redux-thunk' 
const logger = require("redux-logger").logger;

import auth_r from "./reducers/auth";

/**
 * root reducer that combines all redux reducers
 */
const rootReducer = combineReducers({
  auth_r,
  nav: navReducer,
});

const intialState = {};

/**
 * redux middlewares
 * ReduxThunk = : for handling asynchronous actions
 * navigationmiddleware = : for handling navigationmiddleware actions
 * logger= : logging all actions in console
 */

let middlewares = [ReduxThunk, navigationmiddleware  , logger];


const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, intialState, enhancer);

export default store;
