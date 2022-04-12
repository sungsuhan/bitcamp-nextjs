import React,{useState} from "react"
import {Layout} from '../common';

export default function Login(){
    const [inputs, setInputs] = useState({})
    const {username, password} = inputs;
    
    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const loginRequest = {username, password}
        alert( `등록할 로그인 정보 :  ${ JSON.stringify(loginRequest) }` )
    }

     return <>
     <form action="" onSubmit={handleSubmit}>
     <h1>로그인</h1>
     <div>
        <label><b>User ID</b></label><br/>
            <input type="text" onChange={handleChange} name="username" /><br/>
        <label><b>Password</b></label><br/>
            <input type="text" onChange={handleChange} name="password" /><br/>
        <input type="submit" value="로 그 인" />
        <label><input type = "checkbox"/>Remember me</label><br />
        <button>취 소</button>
     <span>Forgot <a>password?</a></span>
     </div>
     </form>
     </>
  } 

