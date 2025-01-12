import React ,{useEffect , useState}from 'react'
import axios from 'axios'
import './home.css'
import StudentCard from '../../component/studentcard/student'

function App() {
  const [students,setStudents] = useState([]);
  const loadstudent = async()=>{
    const res = await axios.get("http://localhost:5002/students");
    setStudents (res.data.data)
    console.log(res.data.data)
  }
  useEffect(()=>{
    loadstudent();
  },[])

  return (
    <div>
      <h1 className='heading'>School</h1>
      <div className='student'>
     {
      
      students.map((stud , i)=>{
        const {name,age,Rollno} = stud; 
        
        return(
          
         <StudentCard key={i} name={name} age={age} Rollno={Rollno}/>
         
        )
      })
     }
     
     </div>
    </div>
  )
}

export default App