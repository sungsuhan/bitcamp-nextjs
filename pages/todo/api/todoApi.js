import axios  from 'axios';
const SERVER = 'http://localhost:8080'

export const todoTodo = todoRequest => axios.post(`${SERVER}/todo/todo`, todoRequest)