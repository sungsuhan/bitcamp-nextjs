import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// parameter

// payload
export interface JoinPayload{
    data:{
        todo: {
            todo: string;
        }
    }
}

// state
export interface TodoState{
    todoLoading: boolean;
    todoData: any;
    error: any;
    token: null;
}


const initialState: TodoState = {
    todoLoading: false,
    todoData: null,
    error: null,
    token: null
}

const userSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        joinRequest(state: TodoState, action: PayloadAction<JoinPayload>){ state.todoLoading = true; state.error = null},
        joinSuccess(state: TodoState, action: PayloadAction<JoinPayload>){ state.todoLoading = false; state.error = action.payload},
        joinFailure(state: TodoState, action: PayloadAction<JoinPayload>){ state.todoLoading = false; state.error = action.payload}
    }
})
const { reducer, actions } = userSlice
export const {
    joinRequest, joinSuccess, joinFailure
} = actions
export default reducer