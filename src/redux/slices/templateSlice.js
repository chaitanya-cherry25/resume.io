import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
    name:"Template",
    initialState: {
        value:"Charan"
    },
    reducers: {
        selectTemplate: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {selectTemplate} = templateSlice.actions;

export default templateSlice.reducer;