import React, { useState } from "react";
import Pay from "./Pay"

function getMonth(num) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthName = months[num];
  return monthName
}


function getnextThreeMonths() {
  var date = new Date();
  var currentMonth = date.getMonth();
  var nextThreeMonths = [];
  nextThreeMonths.push(currentMonth)
  nextThreeMonths.push(currentMonth + 1);
  nextThreeMonths.push(currentMonth + 2);
  nextThreeMonths.push(currentMonth + 3);
  return nextThreeMonths
}




export default function Enrollment() {




  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [batch, setBatch] = useState('1');
  const [showPay, setShowPay] = useState(false);
  const [tid, setTid] = useState()
  const [date, setDate] = useState()


  const handleMonthChange = (e) => {
    if (e.target.value < 12) {
      setMonth((e.target.value % 12) + 1)
      setYear(new Date().getFullYear())
    } else {
      setMonth((e.target.value % 12) + 1)
      setYear(new Date().getFullYear() + 1)
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!month) {
      alert("Select Month")
    }


    var res = await fetch('https://yogabackend-production.up.railway.app/get_random_transaction_id/')
    var data = await res.json()
    setTid(data.id)
    let yourDate = new Date()
    var v = yourDate.toISOString().split('T')[0]
    setDate(v)
    setShowPay(true)







  }

  function showPayment() {
    if (showPay) {
      return <Pay tid={tid} batch={batch} month={month} year={year} date={date} setShowPay={setShowPay} uid={localStorage.getItem("user")} />
    }
    return <></>
  }

  return (
    <div className="Enrollment">
      <div className="title">new enrollment </div>
      {showPayment()}
      <form className="form" onSubmit={handleSubmit}>

        <label className="label">
          <div className="label-title">month:</div>
          <select className="select" onChange={handleMonthChange} id="months">
            <option className="option" >-Select Month-</option>
            {getnextThreeMonths().length > 0 && getnextThreeMonths().map((item, i) =>
              <option className="option" value={item}>{getMonth((item) % 12)}</option>
            )}
          </select>
        </label>

        <label className="label">
        <div className="label-title">batch:</div>
          <div className="radioContainer1">
            <div className="radioElem"><input className="radio" type="radio" value="1" checked={batch === '1'} onChange={(e) => setBatch(e.target.value)} /> <div className="radioText">6-7 AM by Prabhat Verma</div></div>
            <div className="radioElem"><input className="radio" type="radio" value="2" checked={batch === '2'} onChange={(e) => setBatch(e.target.value)} /> <div className="radioText">7-8 AM by Indresh Gupta</div></div>
            <div className="radioElem"><input className="radio" type="radio" value="3" checked={batch === '3'} onChange={(e) => setBatch(e.target.value)} /> <div className="radioText">8-9 AM by Priyanka Gautam</div></div>
            <div className="radioElem"><input className="radio" type="radio" value="4" checked={batch === '4'} onChange={(e) => setBatch(e.target.value)} /> <div className="radioText">5-6 PM by Rashi Agarwal</div></div>
          </div>
        </label>
        <button className="payButtonn" type="submit">pay</button>
      </form>
    </div>

  );
}
