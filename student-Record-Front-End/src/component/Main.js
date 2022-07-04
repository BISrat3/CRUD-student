import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import StudentRecord from '../pages/StudentPage'
import StudentList from '../pages/StudentList'
import { response } from 'express'

function Main(props){
    const [student, setStudent] = useState(null)

    const URL =""

    const getStudent =() =>{
        fetch(URL)
        .then(resonse => response.json())
        .then(result => setStudent(result))
    }

    const createStudent = async (student)=>{
        await fetch (URL, {
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(student),
        });
        getStudent();
    }

    return(
        <main>
            <Routes>
                <Route exact path='/' element={<StudentList student={student}/>}/>
                <Route path='/:idx' element={<StudentRecord createStudent={createStudent}/>}/>
            </Routes>
        </main>
    )
}

export default Main