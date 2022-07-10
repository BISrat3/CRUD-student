import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Student from '../pages/Student'
import StudentList from '../pages/StudentList'

function Main(props){
    const [student, setStudent] = useState(null)

    const URL ="https://backend-strecord.herokuapp.com/student/"

    const getStudent = () =>{
        fetch(URL)
        .then(res => res.json())
        .then(result => setStudent(result))
    }

    
    
    const createStudent = async (record)=>{
        await fetch (URL, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(record),
        });
        getStudent();
    }
    
    useEffect(()=> getStudent(), [])
    console.log(`Student are ${student}`)
    return(
        <>
            <Routes>
                <Route path='/' element={<Student createStudent={createStudent} student={student}/>}/>
                <Route exact path='/:id' element={<StudentList student={student}/>}/>
            </Routes>
        </>
    )
}

export default Main