import { combineReducers } from "@reduxjs/toolkit";
import list from "../slices/list";
import profile from "../slices/profile";

export const rootReducer = combineReducers({
    list: list,
    profile: profile
});

