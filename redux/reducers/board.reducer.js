import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state, action) => {
            alert('리듀서 내부로 들어온 제목은 ?'+JSON.stringify(action))
        }
    }
})

export const { addBoard } = boardSlice.actions

export default boardSlice.reducer