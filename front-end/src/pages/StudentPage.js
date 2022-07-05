import { useState } from 'react'
import {Link} from 'react-router-dom'

function StudentRecord(props){
    // state to hold form data
    const [ newStudent, setNewStudent] = useState({
        name :'',
        phonenumber:'',
        state:''
        })

    // handle change function for form
    const handleChange =(e)=>{
        console.log(e.target.value)
        setNewStudent({...newStudent,[e.target.name]:e.target.value})
    }

    // submit function
    const handleSubmit =(e) =>{
        e.preventDefault();
        props.createStudent(newStudent);
        setNewStudent({
            name:'',
            phonenumber:'',
            state:''
        })
    }
    const laoded=() =>{
        return props.people.map((student)=>(
            <div key={student._id} className='student'>
                <Link to={`/${student._id}`}>
                    <h2>{student.name}</h2>
                    <h2>{student.phonenumber}</h2>
                    <h2>{student.state}</h2>
                </Link>
            </div>
        )
        )
    }
    const loading = () =>{
        return <h1>Loading......</h1>
    }
    return(
        <section>
            <form onSubmit={handleSubmit} className='registration-form'>
                <input type='text' value={newStudent.name} name='name'
                placeholder='name' onChange={handleChange
                } />
                <input type='number' value={newStudent.phonenumber} name='number'
                placeholder='phonenumber' onChange={handleChange
                } />
                 <input type='text' value={newStudent.state} name='name'
                placeholder='state' onChange={handleChange
                } />       
                <input type='submit' value='Create Student!'/>
            </form>
            {props.people ? laoded() : loading()}
        </section>
    )
}

export default StudentRecord