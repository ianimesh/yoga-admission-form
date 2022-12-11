import React from 'react'
import { useState } from 'react'
import Batch from './Batch'
import Enrollment from './Enrollment'
import Payments from './Payments'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [name, setName] = useState();
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("user"); 
    navigate('/');
  }
  useEffect(() => {
    if(!localStorage.getItem("user"))
      navigate('/')
    else
      getname()
  }, [])

  async function getname(){
    axios.get(`https://yogabackend-production.up.railway.app/get_subscriber/${localStorage.getItem("user")}/`)
      .then(response => {
        setName(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
    }
  


  const [Content, setContent] = useState(0)
  function showContent(content){
    if(content===0)
    return <Batch/>
    if(content===1)
    return <Enrollment/>
    if(content===2)
    return <Payments/>
  }
  function boldStyle(b){
    return b?{fontWeight: '700'}:{}
  }
  return (
    <div className="Dashboard">
      <div className="leftBar">
        <div className='greeting'>Welcome {name}</div>
        <div className="logout" onClick={logout}>Logout</div>
        <div className="navigation">
          <div className='nav-item' style={boldStyle(Content===0)} onClick={()=>{setContent(0)}}>• my yoga batches</div>
          <div className='nav-item' style={boldStyle(Content===1)} onClick={()=>{setContent(1)}}>• new enrollment</div>
          <div className='nav-item' style={boldStyle(Content===2)} onClick={()=>{setContent(2)}}>• enrollment history</div>
        </div>
      </div>
      <div className='contentBar'>
        {showContent(Content)}
      </div>
    </div>
  )
}
