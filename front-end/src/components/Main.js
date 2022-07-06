import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Student from '../pages/Student'
import StudentList from '../pages/StudentList'

function Main(props){
    const [student, setStudent] = useState(null)

    const URL =""

    const getStudent =() =>{
        fetch(URL)
        .then(res => res.json())
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
        <>
            <Routes>
                <Route exact path='/:idx' element={<StudentList student={student}/>}/>
                <Route path='/student' element={<Student createStudent={createStudent}/>}/>
            </Routes>
        </>
    )
}

export default Main