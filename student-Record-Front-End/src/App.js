import './App.css';
import Nav from '../src/component/Nav'
import React, {useState, useEffect} from 'react';
import StudentRecord from './pages/StudentPage';
import { Routes,Route } from 'react-router-dom';
import StudentList from './pages/StudentList';

function App() {
  const[students, setStudents] = useState('')

  return (
    <>
      <Routes>
        <Route exact path='/' element={<StudentList students={students}/>}/>
        <Route path='/:idx' element={<StudentRecord students={students}/>}/>
      </Routes>
      {/* <Nav /> */}

    </>
  );
}

export default App;
