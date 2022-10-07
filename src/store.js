
// import './action.js'

// import { configureStore } from '@reduxjs/toolkit'
// export default configureStore({
//     reducer: {
//     },
import {createStore} from "redux";
import rootReducer from "./reducers/index";
import { applyMiddleware } from 'redux';


const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
