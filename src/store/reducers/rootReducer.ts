import { combineReducers } from "@reduxjs/toolkit";
import { addToPageReducer } from "./addToPageReducer";
import { inputReducer } from "./inputReducer";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
    addToPage: addToPageReducer,
    input: inputReducer
});

export type RootState = ReturnType<typeof rootReducer>