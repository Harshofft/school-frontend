import React from 'react'
import './student.css'
import { Link } from 'react-router-dom'

function student({name,age,Rollno}) {
    
    
  return (
    <Link to={`/detail/${Rollno}`} className='link'>
    <div className='student-card'>
    <h1>{name}</h1>
    <h3>Roll no: {Rollno}</h3>
    <h3>Age : {age}</h3>
   </div>
   </Link>
  )
}

export default student