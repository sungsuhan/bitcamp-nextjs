import axios from 'axios';
import React, { useState } from "react";

export default function Calc() {

    const [inputs, setInputs] = useState({opcode: "+"})

    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert( `등록할 게시글 :  ${ JSON.stringify(inputs) }` )
        axios.post("http://localhost:5000/api/basic/calc", inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
            const result = res.data
            document.getElementById('result-span').innerHTML =
            `<h3>${result.num1} ${result.opcode} ${result.num2} = ${result.res}</h3>`
        })
        .catch(err => alert(err))
    }

return (<div>
    <form action="" onSubmit={handleSubmit}>
    <h1>계산기</h1>

        <label htmlFor="">숫자1</label>
        <input name="num1" type="text" onChange={handleChange} /><br />

        <label htmlFor="">연산자</label>
        <select name="opcode" onChange={handleChange} >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select><br />

        <label htmlFor="">숫자2</label>
        <input name="num2" type="text" onChange={handleChange} /><br />

        <input type="submit" value="계산" /><br />
    </form>
    <div> 계산 결과 : <span id='result-span'></span></div>
</div>
)
}