import { yellow } from '@mui/material/colors';
import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer';
import { postTodo } from '../api/todoApi'

interface TodoType{
    type: string;
    payload: {
        userid: string,
        task: string,  
        completed: string
    }
}
interface TodoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

function* join(todo: TodoType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(todo))
        const response: TodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.joinSuccess(response))
    }catch(error){
        alert('진행 3: saga내부 join 실패  ') 
        yield put(todoActions.joinFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(todoActions.joinRequest, join)
}