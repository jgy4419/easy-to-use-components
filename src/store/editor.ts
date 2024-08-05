import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const editorSlice = createSlice({
    name: "editor",
    initialState: { codeState: false },
    reducers: {
        codeStateChange: (state, action: PayloadAction<boolean>) => {
            state.codeState = action.payload;
        }
    }
});

export const { codeStateChange } = editorSlice.actions;
export default editorSlice.reducer;