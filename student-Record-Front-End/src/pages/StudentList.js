import { Link } from "react-router-dom";
// import {useParams, useNavigate} from 'react-router-dom'


function StudentList(props) {
    console.log(props)
    // const navigate = useNavigate()
    // const {id} = useParams()
    // const people = props.people
    // const student = student.find(student=> student._id === id)
  return (
    <>
        {props.students ? props.students.map((student, idx)=>(
            <div key={idx}>
            <Link to ={`/idx`}>
            <h3>{student.name}</h3>
            <h3>{student.phoneNumber}</h3>
            </Link>
            <h2>{student.state}</h2>
          </div>
        )): <h3> Loading! Please Wait!</h3>}
        
    </>
  );
}
export default StudentList;
