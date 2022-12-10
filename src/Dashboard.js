import React from 'react'
import { useState } from 'react'
import Batch from './Batch'
import Enrollment from './Enrollment'
import Payments from './Payments'

export default function Dashboard() {
  const [Content, setContent] = useState(0)
  function showContent(content){
    if(content===0){
      return <Batch/>
    }
    if(content===1){
      return <Enrollment/>
    }
    if(content===2)
    return <Payments/>
  }
  function boldStyle(b){
    return b?{fontWeight: '700'}:{}
  }
  return (
    <div className="Dashboard">
      <div className="leftBar">
        <div className='greeting'>Welcome Animesh!</div>
        <div className="logout">Logout</div>
        <div className="navigation">
          <div className='nav-item' style={boldStyle(Content===0)} onClick={()=>{setContent(0)}}>• my yoga batches</div>
          <div className='nav-item' style={boldStyle(Content===1)} onClick={()=>{setContent(1)}}>• new enrollment</div>
          <div className='nav-item' style={boldStyle(Content===2)} onClick={()=>{setContent(2)}}>• payments history</div>
        </div>
      </div>
      <div className='contentBar'>
        {showContent(Content)}
      </div>
    </div>
  )
}
