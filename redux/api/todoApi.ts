import axios from 'axios'
import { JoinPayload } from '../reducers/todoReducer'
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export const todoApi = (data: JoinPayload) => axios.post(`${SERVER}/api/todo/todo`,data, { headers})