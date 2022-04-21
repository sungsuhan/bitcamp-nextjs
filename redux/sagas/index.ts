import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin } from "./userSaga";
import {watchAddTodo} from "./todoSaga";

export default function* rootSaga() {
    yield all([watchJoin(), watchAddTodo(),watchLogin()])

}