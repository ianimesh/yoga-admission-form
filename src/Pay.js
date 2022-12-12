import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Pay(props) {
  async function create(){
    
    var data = {
      userID: props.uid,
      date: props.date,
      month: props.month.toString(),
      year: props.year.toString(),
      batchId: props.batch,
      payment_transaction_id: props.tid
    }
    console.log(data)
    axios.post('https://yogabackend-production.up.railway.app/create_enrollment/', data)
      .then(response => {
          props.setShowPay(false)
          alert("Payment Successful")
      }).catch(err=>{
        props.setShowPay(false)
          alert("Payment declined. Enrollment maybe already created for this month")
      })
  }
  const navigate = useNavigate();
  return (
    <div className='pay-container'>
      <div className='Pay'>
        <p>Total Amount: 500/-</p>
        <p>Date: {new Date().toDateString()}</p>
        <p>Transaction ID: {props.tid}</p>
        <button onClick={create}>Pay Now</button>
      </div>
    </div>
  )
}



