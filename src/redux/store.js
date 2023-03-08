import RootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
import { legacy_createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from "redux-thunk";

const store = legacy_createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


export default store;