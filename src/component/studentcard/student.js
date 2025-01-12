import React from 'react'
import './student.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function student({name,age,Rollno}) {
    const navigate = useNavigate();
    const delStud = async(Rollno)=>{
      const res = await axios.delete(`http://localhost:5002/students/${Rollno}`);
      window.location.reload();
    }
  return (
    
    <div className='student-card' onClick={()=>{
      navigate(`/detail/${Rollno}`)
    }}>
    <h1>{name}</h1>
    <h3>Roll no: {Rollno}</h3>
    <h3>Age : {age}</h3>
    <button type="button" className='del-btn' onClick={(e)=>{
      e.stopPropagation();
      delStud(Rollno);
    }}>Delete</button>
   </div>
  )
}

export default student