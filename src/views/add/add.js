import React ,{useState} from 'react'
import './add.css'
import axios from 'axios';
function Add() {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [age , setAge] = useState(''); 
  async function  addStudent()  {
    try{
 const res = await axios.post("http://localhost:5002/students",{
  
  Rollno:rollno,
  name:name,
  age:age
  
 });
 setRollno('');
 setName('');
 setAge('');
 alert(res.data.msg)
 
  
} catch(error){
  alert.error(error?.res?.data?.message)  
}
  };
  return (
    <div className='add-container'>
      <h1 className='add-title'>Add Food</h1>
        <div className='addstud'>
          <input type='text' className='inputbox' 
          placeholder='Add index' value={rollno}
          onChange={(e)=>{setRollno(e.target.value)}}
          />
          <input type='text' className='inputbox' 
          placeholder='Food Name ' value={name}
          onChange={(e)=>{setName(e.target.value)}}/>
          <input type='text' className='inputbox'
           placeholder='price' value={age}
           onChange={(e)=>{setAge(e.target.value)}}/>        
        </div>
        <button type='button' className='addbtn' onClick={addStudent}>Add Food</button>
     </div>

  )
}

export default Add