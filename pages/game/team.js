import React,{useState} from "react"
import axios from "axios"
import style from "./styles/team-list.module.css"

export default function TeamList(){
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert( `등록할 팀 정보 : ${ JSON.stringify(inputs) }` )
        axios.post("http://localhost:5000/api/game/team-list", inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
        })
        .catch(err => alert(err))
    }

    return (<>
        <div className={style.container}>
            <form action="" onSubmit={handleSubmit}>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="teamId" name="teamId"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamRegion">연고지</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="teamRegion" name="teamRegion"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamName">팀명</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="teamName" name="teamName"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="orgYyyy">창단년도</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="orgYyyy" name="orgYyyy"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                </div>
                <div className={style.col75}>
                    <input type="text"onChange={handleChange} className={style.inputText} id="stadiumName" name="stadiumName"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="address">주소</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="address" name="address"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="tel">전화번호</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="tel" name="tel"/>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}