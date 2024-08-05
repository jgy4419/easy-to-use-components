import { combineReducers } from "@reduxjs/toolkit";
import editorReducer from "./editor";

const rootReducer = combineReducers({
    editor: editorReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
