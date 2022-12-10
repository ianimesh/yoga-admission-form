import React from 'react'

export default function Batch() {

  function getMonths(){

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    // Get the current date
    const date = new Date();
    
    // Get the current month and year
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    
    // Create an array to hold the months
    const monthArray = [];
    
    // Add the previous 3 months to the array
    for (let i = 0; i < 3; i++) {
      const monthIndex = currentMonth - i - 1;
      const year = monthIndex < 0 ? currentYear - 1 : currentYear;
      const month = months[(monthIndex + 12) % 12];
      monthArray.push(month + " " + year);
    }
    
    // Add the current month to the array
    monthArray.push(months[currentMonth] + " " + currentYear);
    
    // Add the next 3 months to the array
    for (let i = 0; i < 3; i++) {
      const monthIndex = currentMonth + i + 1;
      const year = monthIndex > 11 ? currentYear + 1 : currentYear;
      const month = months[monthIndex % 12];
      monthArray.push(month + " " + year);
    }
    
    console.log(monthArray);
    return monthArray;
  }

    


  return (
    <div className="Batch">
      
        <div className="table-title">batches</div>
        <div className='table-content'>
        <div className='sub-months'>
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
        </div>
        <div className="current-month">
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
        </div>
        <div className='sub-months'>
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
          <div className="month-details">
            <div className='detail-item'>
              feb'22
            </div>
            <div className='detail-item'>
              enrolled
            </div>
            <div className='detail-item'>
              B1
            </div>
            <div className='detail-item'>
              19:00 - 20:00
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
