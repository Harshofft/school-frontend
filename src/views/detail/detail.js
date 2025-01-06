import React,{useEffect,useState} from 'react'
import './detail.css'       
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
    const [student,setStudent] = useState({});
    const {Rollno} = useParams();
    const loadstud = async(Rollno)=>{
        const res = await axios.get(`http://localhost:5002/students/${Rollno}`);
        console.log(res.data)
        setStudent(res.data.data)
    }
    useEffect(()=>{
        loadstud(Rollno);
    },[Rollno])
  return (
    <div>
        <h1>student details</h1>
        <h1>Roll no: {Rollno}</h1>
        <h1>Name: {student.name}</h1>
    </div>
  )
}

export default Detail