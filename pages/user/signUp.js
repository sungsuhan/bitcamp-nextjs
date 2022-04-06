import axios from "axios"
import React,{useState} from "react"

export default function SignUp() {
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
        
    const handleSubmit = e => {
        e.preventDefault()
        alert( `등록할 게시글 :  ${ JSON.stringify(inputs) }` )
        axios.post("http://localhost:5000/api/user/signUp", inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
            const result = res.data
            document.getElementById('result-span').innerHTML =
            `<h3>${result.name}님 회원가입 축하합니다<h3>`
        })
        .catch(err => alert(err))
    }
    
    return <>
    <form action="" onSubmit={handleSubmit}>
     <h1>회원가입</h1>
     <div>
        <label><b>사용자 ID</b></label><br/>
            <input type="text" onChange={handleChange} name="userId" /><br/>
        
        <label><b>비밀번호</b></label><br/>
            <input type="text" onChange={handleChange} name="pw" /><br/>
        
        <label><b>이름</b></label><br/>
            <input type="text" onChange={handleChange} name="name" /><br/> 
        
        <label><b>전화번호</b></label><br/>
            <input type="text" onChange={handleChange} name="tel" /><br/>   
        
            <input type="submit" value="가 입" />
            <button>취 소</button>
     </div>
     </form>
     <div><span id='result-span'></span></div>
     
     </>
}