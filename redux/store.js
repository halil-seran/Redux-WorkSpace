import { createStore, combineReducers } from "redux";
import numberReducer from "./reducers/numberReducer";
import listReducer from '../redux/reducers/listReducer';

const reducers = combineReducers({ counter: numberReducer, myList: listReducer });
const store = createStore(reducers);

export default store;


//ekledigimiz reducerlari buraya tanimliyoruz