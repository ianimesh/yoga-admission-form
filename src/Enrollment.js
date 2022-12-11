import React, { useState } from "react";
import Pay from "./Pay"

function getMonth(num){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthName = months[num];
  return monthName
}


function getnextThreeMonths(){
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


  const handleMonthChange = (e) =>{
    if(e.target.value<12){
      setMonth(e.target.value+1)
      setYear(new Date().getFullYear())
    }else{
      setMonth((e.target.value%12) + 1)
      setYear(new Date().getFullYear()+1)
    }
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data here, such as send it to an API or save it to a database
  }

  function showPayment(){
    if(showPay){
      return <Pay/>
    }
    return <></>
  }

  return (
    <div>
      {showPayment}
      <form onSubmit={handleSubmit}>
      
      <label>
          Month:
          <select onChange={handleMonthChange} id="months">
            <option>-Select Month-</option>
            {getnextThreeMonths().length > 0 && getnextThreeMonths().map((item, i) => 
              <option value={item}>{getMonth((item)%12)}</option>
            )}
          </select>
        </label>

        <label>
          Batch:
          <div className="radioContainer">
            <input type="radio" value="1" checked={batch === '1'} onChange={(e) => setBatch(e.target.value)} /> 6-7 AM
            <input type="radio" value="2" checked={batch === '2'} onChange={(e) => setBatch(e.target.value)} /> 7-8 AM 
            <input type="radio" value="3" checked={batch === '3'} onChange={(e) => setBatch(e.target.value)} /> 8-9 AM
            <input type="radio" value="4" checked={batch === '4'} onChange={(e) => setBatch(e.target.value)} /> 5-6 PM
          </div>
        </label>
      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
}
