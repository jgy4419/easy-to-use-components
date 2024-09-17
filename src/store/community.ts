import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const communitySlice = createSlice({
    name: "community",
    initialState: { 
        title: "제목을 입력해주세요.",
        name: "user",
        content: "내용이 없습니다.",
        password: "",
        category: "",
        component: "",
        date: ""
     },
    reducers: {
        titleChange: (state, action) => {
            state.title = action.payload;

            console.log("title action", action.payload);
        },
        nameChange: (state, action) =>{
            state.name = action.payload;

            console.log("name action", action.payload);
        },
        contentChange: (state, action) =>{
            state.content = action.payload;

            console.log("content action", action.payload);
        },
        passwordChange: (state, action) =>{
            state.password = action.payload;
        },
        categoryChange: (state, action) =>{
            state.category = action.payload;
        },
        componentChange: (state, action) =>{
            state.component = action.payload;
        },
        dateChange: (state, action) =>{
            state.date = action.payload;
        }
    }
});

export const { 
    titleChange, 
    nameChange, 
    contentChange, 
    passwordChange,
    categoryChange,
    componentChange,
    dateChange
 } = communitySlice.actions;
 
export default communitySlice.reducer;