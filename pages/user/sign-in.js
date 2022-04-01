import React,{useState} from "react"

export default function SignIn(){
    const [inputs, setInputs] = useState({})
    const { name, pw } = inputs

    const onChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const onClick = e => {
        e.preventDefault()
        const res = {name, pw}
        alert( `데이터셋 출력 :  ${ JSON.stringify(res) }` )
    }

     return <>
     <h1>로그인</h1>
     <div>
        <label><b>Username</b></label><br/>
            <input type="text" onChange={onChange} name="name" /><br/>
        <label><b>Password</b></label><br/>
            <input type="text" onChange={onChange} name="pw" /><br/>
        <input type="button" onClick={onClick} value="로그인" /><br />
        <label><input type = "checkbox"/>Remember me</label>
     </div>
     <div>
        <button>Cancel</button>
     <span>Forgot <a>password?</a></span>
     </div>
     </>
  } 


















