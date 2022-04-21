import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { addTodoApi } from '../api/todoApi'
import { todoActions } from '../../redux/reducers/todoReducer';
interface TodoType{
    type: string;
    payload: {
        task: String
    }
}
interface TodoSuccessType{
    type: string;
    payload: {
        task: string
    }
}
function* addTodo(todo: TodoType){
    try{
        alert('사가내부진입')
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.addTodoSuccess(response))
       
    }catch(error){
        yield put(todoActions.addTodoFailure(error))
        alert('사가내부진입실패')
    }
}
function* getTodo(todo: TodoType){
    try{
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.getTodoSuccess(response))
       
    }catch(error){
        yield put(todoActions.getTodoFailure(error))
    }
}
function* modifyTodo(todo: TodoType){
    try{
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.modifyTodoSuccess(response))
    }catch(error){
        yield put(todoActions.modifyTodoFailure(error))
    }
}
function* removeTodo(todo: TodoType){
    try{
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.removeTodoSuccess(response))
       
    }catch(error){
        yield put(todoActions.removeTodoFailure(error))
    }
}
export function* watchAddTodo(){
    yield takeLatest(todoActions.addTodoRequest, addTodo)
}
export function* watchGetTodos(){
    yield takeLatest(todoActions.getTodoRequest, getTodo)
}
export function* watchModifyTodo(){
    yield takeLatest(todoActions.modifyTodoRequest, modifyTodo)
}
export function* watchRemoveTodo(){
    yield takeLatest(todoActions.removeTodoRequest, removeTodo)
}
