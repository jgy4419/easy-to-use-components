import { combineReducers } from "@reduxjs/toolkit";
import editorReducer from "./editor";
import communityReducer from "./community";
import searchReducer from "./search";

const rootReducer = combineReducers({
    editor: editorReducer,
    community: communityReducer,
    search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
