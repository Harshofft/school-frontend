import React,{useEffect,useState} from 'react'
import './detail.css'       
import { useParams } from 'react-router-dom' // for reading the params from the url
import axios from 'axios'
function Detail() {
    const [student,setStudent] = useState({});
    const {Rollno} = useParams(); // for reading the params from the url this will read the rolllno from the url
    const loadstud = async(Rollno)=>{ // this fun will reacive the rollno from the url and fetch the data from the backend
        const res = await axios.get(`http://localhost:5002/students/${Rollno}`);
        setStudent(res.data.data)
    }
    useEffect(()=>{
        loadstud(Rollno);
    },[Rollno])
  return (
    <div className='detail-student center'>
        <h1>student details</h1>
        <h1>Roll no: {Rollno}</h1>
        <h1>Name: {student?.name}</h1>
        <h1>Age: {student?.age}</h1>
        {/* ? (quetion mark)is used  for safe navigation */}
    </div>
  )
}

export default Detail