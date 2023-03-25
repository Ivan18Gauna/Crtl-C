// import {createStore, applyMiddleware, compose} from "react-redux";
// import rootReducer from "../reducer/index";
// import thunk from 'redux-thunk'
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// // export default store;

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'

export const store = createStore(rootReducer, applyMiddleware(thunk));