import React, { useState } from "react";
export default function Calc() {

const [inputs, setInputs] = useState({opcode: "+"})
const { num1, num2, opcode} = inputs

const onChange = e => {
    e.preventDefault()
    const { value, name } = e.target
    setInputs({
        ...inputs,
        [name]: value
    })
}

const onClick = e => {
    e.preventDefault()
        const res = {num1, opcode,num2}
        alert( `데이터셋 출력 :  ${ JSON.stringify(res) }` )
    }

return (<>
    <h1>계산기</h1>
    <form action="">

        <label htmlFor="">num1</label>
        <input name="num1" type="text" onChange={onChange} /> <br />

        <label htmlFor="">연산자</label>
        <select name="opcode" onChange={onChange} >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select><br />

        <label htmlFor="">num2</label>
        <input name="num2" type="text" onChange={onChange} /><br />

        <button onClick={onClick}>계산하기</button>
    </form>

</>
)
}