import React,{useState} from "react"
import axios from "axios"

export default function SignIn(){
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert( `등록할 로그인 정보 :  ${ JSON.stringify(inputs) }` )
        axios.post("http://localhost:5000/api/user/sign-in", inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
        })
        .catch(err => alert(err))
    }

     return <>
     <form action="" onSubmit={handleSubmit}>
     <h1>로그인</h1>
     <div>
        <label><b>User ID</b></label><br/>
            <input type="text" onChange={handleChange} name="name" /><br/>
        <label><b>Password</b></label><br/>
            <input type="text" onChange={handleChange} name="pw" /><br/>
        <input type="submit" value="로 그 인" />
        <label><input type = "checkbox"/>Remember me</label><br />
        <button>취 소</button>
     <span>Forgot <a>password?</a></span>
     </div>
     </form>
     </>
  } 


















