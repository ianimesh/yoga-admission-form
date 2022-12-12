import React, { useEffect, useState } from 'react'
import axios from 'axios';

function getMonth(num) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthName = months[num];
  return monthName
}

export default function Payments() {
  const [payments, setPayments] = useState([])
  async function getPayments() {
    axios.get(`https://yogabackend-production.up.railway.app/get_enrollments/${localStorage.getItem("user")}/`)
      .then(response => {
        console.log(response);
        setPayments(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    getPayments()
  }, [])

  return (
    <div className="Payments">
      <div className='title'>enrollments</div>
      <div className='col'>
        <div className='row bold'>
          <div className='item'> Month</div>
          <div className='item'> Year</div>
          <div className='item'> Batch ID </div>
          <div className='item'> Payment Id</div>
          <div className='item'> Payment Date </div>
        </div>
        {payments.length > 0 && payments.map((item, i) =>
          <div className='row'>
            <div className='item'> {getMonth(item.month-1)}</div>
            <div className='item'> {item.year}</div>
            <div className='item'> {item.batchId}</div>
            <div className='item'> {item.payment_transaction_id}</div>
            <div className='item'> {item.date}</div>
          </div>
        )}
      </div>
    </div>

  )
}


