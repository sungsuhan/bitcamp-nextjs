import axios  from 'axios';
const SERVER = 'http://localhost:8080'

export const userLogin = loginRequest => axios.post(`${SERVER}/user/login`, loginRequest)
export const userJoin = joinRequest => axios.post(`${SERVER}/user/join`, joinRequest)