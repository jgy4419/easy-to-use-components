import { combineReducers } from "@reduxjs/toolkit";
import editorReducer from "./editor";
import communityReducer from "./community";

const rootReducer = combineReducers({
    editor: editorReducer,
    community: communityReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
