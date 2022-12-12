import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Batch() {
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
    console.log(payments)
  }, [])

  function getBatch(month, year){
    console.log(month,year)
    var batch=0;
    for(var i = 0; i<payments.length; i++){
      if(payments[i].month==month&&payments[i].year==year){
        batch = payments[i].batchId;
        break;
      }
    }
    if(batch===0){
      return ({
        batchName: "none",
        batchTime: "-- --",
        status: "not enrolled"
      })
    }
    if(batch===1){
      return ({
        batchName: "B1",
        batchTime: "6-7 AM",
        status: "enrolled"
      })
    }
    if(batch===2){
      return ({
        batchName: "B2",
        batchTime: "7-8 AM",
        status: "enrolled"
      })
    }
    if(batch===3){
      return ({
        batchName: "B3",
        batchTime: "8-9 AM",
        status: "enrolled"
      })
    }
    if(batch===4){
      return ({
        batchName: "B4",
        batchTime: "5-6 PM",
        status: "enrolled"
      })
    }
  }

  function getname(m,y){
    var months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    return months[m]+"'"+y.toString().substring(2);
  }

  function getMandY(i){
    var currentMonth = new Date().getMonth();
    var month = currentMonth+i;
    var year = new Date().getFullYear();
    if(month>=12){
      year++;
      return ({
        m: ((month+12)%12)+1,
        y: year,
        n: getname((month+12)%12,year)
      })
    }
    if(month<0){
      year--;
      return ({
        m: ((month+12)%12)+1,
        y: year,
        n: getname((month+12)%12,year)
      })
    }
    return ({
      m: ((month+12)%12)+1,
      y: year,
      n: getname((month+12)%12,year)
    })
  }

  return (
    <div className="Batch">

      <div className="table-title">batches</div>
      <div className='table-content'>
        <div className='sub-months'>
          <div className="month-details">
            <div className='detail-item'>
              {getMandY(-3).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-3).m,getMandY(-3).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-3).m,getMandY(-3).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-3).m,getMandY(-3).y).batchTime}
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              {getMandY(-2).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-2).m,getMandY(-2).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-2).m,getMandY(-2).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-2).m,getMandY(-2).y).batchTime}
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              {getMandY(-1).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-1).m,getMandY(-1).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-1).m,getMandY(-1).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(-1).m,getMandY(-1).y).batchTime}
            </div>
          </div>
        </div>
        <div className="current-month">
          <div className="month-details">
            <div className='detail-item'>
              {getMandY(0).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(0).m,getMandY(0).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(0).m,getMandY(0).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(0).m,getMandY(0).y).batchTime}
            </div>
          </div>
        </div>
        <div className='sub-months'>
        <div className="month-details">
            <div className='detail-item'>
              {getMandY(1).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(1).m,getMandY(1).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(1).m,getMandY(1).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(1).m,getMandY(1).y).batchTime}
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              {getMandY(2).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(2).m,getMandY(2).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(2).m,getMandY(2).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(2).m,getMandY(2).y).batchTime}
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              {getMandY(3).n}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(3).m,getMandY(3).y).status}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(3).m,getMandY(3).y).batchName}
            </div>
            <div className='detail-item'>
              {getBatch(getMandY(3).m,getMandY(3).y).batchTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
