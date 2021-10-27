import { combineReducers } from "@reduxjs/toolkit";
import list from "../slices/list";

export const rootReducer = combineReducers({
    list: list
});

