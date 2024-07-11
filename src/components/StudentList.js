import React, { useRef } from 'react'
import { deleteStudent } from '../services/api'

export default function StudentList({students,setCurrentStudent,fetchStudents}) {

    let myref=useRef(null);

    const handleDelete= async(id)=>{
        await deleteStudent(id);
        fetchStudents();
    }

    const handleClickLI=(myref,e)=>{
        console.log('target >> ' ,e.target);
        e.target.style.backgroundColor="green";

        // console.log('ref only >> ' ,myref);
        // console.log('current >> ' ,myref.current);
        // myref.current.style.backgroundColor="red";
    }


  return (
    <ul>
        {
            students.map((student)=>(
                <li id={student.id} key={student.id} ref={myref} onClick={(e)=>{handleClickLI(myref,e)}} 
                style={{backgroundColor:'lightgray',cursor:'pointer'}}>
                    {student.name} {student.surname}  (Age : {student.age}, Score : {student.score})
                    <button onClick={()=>setCurrentStudent(student)}>Edit</button>
                    <button onClick={()=>handleDelete(student.id)}>Delete</button>
                </li>
            ))
        }
    </ul>
  )
}
