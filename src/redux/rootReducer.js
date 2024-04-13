import { combineReducers } from "redux";
import { operationsReducer } from "../redux/reducers/operations";

export const rootReducer = combineReducers({
    operationsReducer,
})