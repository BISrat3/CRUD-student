import { useState } from 'react'
import {Link} from 'react-router-dom'

function Student(props){
    // state to hold form data
    const [ newStudent, setNewStudent] = useState({
        firstname:'',
        lastname:'',
        phonenumber:'',
        stateCode:'',
        stateName:''
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
            firstname:'',
            lastname:'',
            phonenumber:'',
            stateCode:'',
            stateName:''
        })
    }
    const laoded=() =>{
        return props.people.map((student)=>(
            <div key={student._id} className='student'>
                <Link to={`/${student._id}`}>
                    <h2>{student.firstname}</h2>
                    <h2>{student.phonenumber}</h2>
                    <h2>{student.stateCode}</h2>
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
                placeholder='Fname' onChange={handleChange
                } />
                <input type='text' value={newStudent.name} name='name'
                placeholder='Lname' onChange={handleChange
                } />
                <input type='number' value={newStudent.phonenumber} name='number'
                placeholder='phonenumber' onChange={handleChange
                } />
                 <input type='number' value={newStudent.stateCode} name='number'
                placeholder='State Code' onChange={handleChange
                } />
                 <input type='text' value={newStudent.state} name='name'
                placeholder='state' onChange={handleChange
                } />      
                <br /> 
                <input type='submit' value='Create Student!'/>
            </form>
            {props.people ? laoded() : loading()}
        </section>
    )
}

export default Student