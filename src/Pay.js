import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Pay(props) {
  const navigate = useNavigate();
  return (
    <div className='Pay'>
    <div>
      <p>Total Amount: 500/-</p>
      <p>Date: {new Date().toDateString()}</p>
      <p>Transaction ID: 1234-5678-9012-3456</p>
      <button onClick={()=>{navigate("/dashboard")}}>Pay Now</button>
    </div>
  </div>
  )
}



