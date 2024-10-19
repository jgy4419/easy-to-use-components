import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        communitySearchData: [],
        componentSearchData: []
    },
    reducers: {
        communityDataChangeHandler: (state, action) => {
            console.log("action payload", action.payload);
            
            state.communitySearchData = action.payload;
        },
        componentDataChangeHandler: (state, action) => {
            console.log("action payload", action.payload);
            
            state.componentSearchData = action.payload;
        }
    }
});

export const {
    communityDataChangeHandler,
    componentDataChangeHandler
} = searchSlice.actions;

export default searchSlice.reducer;