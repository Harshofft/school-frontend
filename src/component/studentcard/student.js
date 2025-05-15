import React from 'react'
import './student.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Student({name,age,Rollno}) {
    const Navigate = useNavigate();
    const delStud = async(Rollno)=>{
      const res = await axios.delete(`http://localhost:5002/students/${Rollno}`);
      window.location.reload();
      console.log(res.data.msg)
    }
  return (
    
    <div className='student-card' onClick={()=>{
      Navigate(`/detail/${Rollno}`)
    }}>
    <h1>{name}</h1>
    <h3>list: {Rollno}</h3>
    <h3>price : {age}</h3>
    <div className='btn-container'>
    <button type="button" className='del-btn' onClick={(e)=>{
      e.stopPropagation();
      delStud(Rollno);
    }}>Delete</button>
    <button type='button' className='editbtn' 
    onClick={(e)=>{
      e.stopPropagation();
      Navigate(`edit/${Rollno}`);
    }}
    >Edit✍🏻</button>
    </div>
   </div>
  )
}

export default Student