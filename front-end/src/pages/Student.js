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
    const handleChange =(event)=>{
        console.log(event.target.value)
        setNewStudent({...newStudent,[event.target.name]:event.target.value})
    }

    // submit function
    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(event)
        props.createStudent(newStudent);
        setNewStudent({
            firstname:'',
            lastname:'',
            phonenumber:'',
            stateCode:'',
            stateName:''
        })
    }
    const loaded=() =>{
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
                <input type='text' value={newStudent.name} name='firstname'
                placeholder='Fname' onChange={handleChange
                } />
                <input type='text' value={newStudent.name} name='lastname'
                placeholder='Lname' onChange={handleChange
                } />
                <input type='number' value={newStudent.phonenumber} name='phonenumber'
                placeholder='phonenumber' onChange={handleChange
                } />
                 <input type='number' value={newStudent.stateCode} name='stateCode'
                placeholder='State Code' onChange={handleChange
                } />
                 <input type='text' value={newStudent.state} name='statename'
                placeholder='state name' onChange={handleChange
                } />      
                <br /> 
                <input type='submit' value='Create Student!'/>
            </form>
            {props.people ? loaded() : loading()}
        </section>
    )
}

export default Student