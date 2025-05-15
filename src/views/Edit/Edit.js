import React ,{useState, useEffect} from 'react'
import './Edit.css'
import axios from 'axios';  
import { useParams } from 'react-router-dom'
function Add() {
  const [student,setStudent] = useState({
    Rollno: '',
    name: '',
    age: ''
  });
 
  const {Rollno} = useParams();
  const loadstud = async(Rollno)=>{ // this fun will reacive the rollno from the url and fetch the data from the backend
    const res = await axios.get(`http://localhost:5002/students/${Rollno}`);
    setStudent(res.data.data)
}
 useEffect(()=>{
        loadstud(Rollno);
    },[Rollno])
  async function  addStudent()  {
    try{
 const res = await axios.put(`http://localhost:5002/students/${Rollno}`,{
  name:student.name,
  age:student.age
  
 });


 alert(res.data.msg)
 

} catch(error){
  alert.error(error?.res?.data?.message)  
}
  };
  return (
    <div className='add-container'>
      <h1 className='add-title'>Update Student</h1>
        <div className='addstud'>
          <input type='text' className='inputbox' 
          placeholder='index of food ' value={student.Rollno}
          onChange={(e)=>{ setStudent({...student,rollno:e.target.value})}}
          disabled
          />
          <input type='text' className='inputbox' 
          placeholder='Name of food' value={student.name}
          onChange={(e)=>{
            setStudent({...student,name:e.target.value})
          }}/>
          <input type="number" className='inputbox'
           placeholder='price' value={student.age}
           onChange={(e)=>{setStudent({...student,
            age:e.target.value
           })}}/>        
        </div>
        <button type='button' className='addbtn' onClick={addStudent}>Update Food</button>
     </div>

  )
}

export default Add