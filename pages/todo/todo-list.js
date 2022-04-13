import axios from "axios"
import { useEffect,useState } from "react"
import tableStyles from "../common/styles/table.module.css"

const Table = ({ columns, colspan, data }) => {

    return (
    <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}>
                {columns.map((column) => (
                    <th key={column} className={tableStyles.td}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            { data.length == 0  ?<tr className={tableStyles.tr}>
                                <td colSpan={colspan} className={tableStyles.td}>일정이 없습니다</td>
                                </tr>
            :data.map((todo) => (
            <tr className={tableStyles.tr}  key={todo} >
                <td className={tableStyles.td}>{todo}</td>
            </tr>
            ))}
        </tbody>
    </table>
    )
}

export default function TodoList() {
    const columns = ["오늘의 일정"]
    const [data, setData] = useState([])
    const count = data.length

    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/todo-list')
        .then(res=>{
            setData(res.data.todos)
        })
        .catch(err=>{})
    },[])

    return (<>

    <h1>스케줄 목록</h1>
    {count!=0 && <h3>스케줄 : {data.length} 개</h3>}
    
    <div className={tableStyles.td}>
    <Table columns={columns} colspan={4} data={data}/>
    </div>
    
     
    </>)
}


