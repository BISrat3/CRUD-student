import { Link } from "react-router-dom";
import {useParams, useNavigate} from 'react-router-dom'

function StudentList(props) {
    console.log(props)
    const {id} = useParams()
    const student = props.student
    const record = student.find(record=> record._id === id)
  return (
    <>
            <h3>{record.firstname}</h3>
            <h3>{record.phoneNumber}</h3>
            <h2>{record.state}</h2>
        {props.students ? props.students.map((student, idx)=>(
            <div key={idx}>
            <Link to ={`/idx`}>
            </Link>
          </div>
        )): <h3> Loading! Please Wait!</h3>}
        
    </>
  );
}
export default StudentList;
