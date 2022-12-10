import React, { useState } from "react";
export default function Enrollment() {

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  const [month, setMonth] = useState("");
  const [batch, setBatch] = useState("");

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  }

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data here, such as send it to an API or save it to a database
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Month:
        <select value={month} onChange={handleMonthChange}>
          <option value="">-- Please choose a month --</option>
          {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Batch:
        <input type="radio" name="batch" value="1" checked={batch === "1"} onChange={handleBatchChange} /> 1
        <input type="radio" name="batch" value="2" checked={batch === "2"} onChange={handleBatchChange} /> 2
        <input type="radio" name="batch" value="3" checked={batch === "3"} onChange={handleBatchChange} /> 3
        <input type="radio" name="batch" value="4" checked={batch === "4"} onChange={handleBatchChange} /> 4
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
