import axios from "axios"
import { useEffect,useState } from "react"
import tableStyles from "../common/styles/table.module.css"
import Link from 'next/link'

const Table = ({ columns, colspan, data }) => {

    return (
    <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}>
                {columns.map((column, index) => (
                    <th key={index} className={tableStyles.td}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0  ?<tr className={tableStyles.tr}>
                                <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다</td>
                                </tr>
            :data.map((user) => (
            <tr className={tableStyles.tr}  key={user.userid} >
                <td className={tableStyles.td}>{user.userid}
                <Link href={{pathname:`/user/[userid]`,
                query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                <a>{user.userid}</a>
                </Link>
                </td>
                <td className={tableStyles.td}>{user.password}</td>
                <td className={tableStyles.td}>{user.name}</td>
                <td className={tableStyles.td}>{user.phone}</td>
            </tr>
            ))}
        </tbody>
    </table>
    )
}

export default function UserList(){
    const columns = ["ID", "이름", "이메일", "전화번호", "생년월일", "주소"]
    const [data, setData] = useState([])
    const count = data.length

    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/user-list')
        .then(res=>{
            setData(res.data.users)
        })
        .catch(err=>{})
    },[])

    return (<>

    <h1>사용자 목록</h1>
    {count!=0 && <h3>회원수 : {data.length} 명</h3>}
    
    <div className={tableStyles.td}>
    <Table columns={columns} colspan={6} data={data}/>
    </div>
    
    </>)
}