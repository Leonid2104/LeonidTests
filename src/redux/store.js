import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import booksPageR from "./booksPage-reducer";
import {reducer as formReducer} from "redux-form"
let reducers = combineReducers({
  booksPage : booksPageR,
  form: formReducer
}) 


let store = createStore(reducers,applyMiddleware(thunkMiddleware));


export default store;