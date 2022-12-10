import React from "react";
import { useState } from "react";
export default function SignUpForm(props) {

  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation goes here
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[\w.-]+@[\w-]+\.[\w.-]+$/;
    const phoneNumberRegex = /^\d{10}$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    // validation goes here
   
    if (!password || !passwordRegex.test(password)) {
        alert("Invalid password")
      return;
    }
    if (!name || !nameRegex.test(name)) {
        alert("Invalid Name")
      return;
    }
    if (!email || !emailRegex.test(email)) {
        alert("Invalid email")
      return;
    }
    if (!phoneNumber || !phoneNumberRegex.test(phoneNumber)) {
        alert("Invalid Phone Number")
      return;
    }
    if (!dob || !dobRegex.test(dob)) {
        alert("Invalid Date of birth. yyyy-mm-dd")
      return;
    }
    if (!gender) {
        alert("Invalid Gender")
      return;
    }

    // To Do Submit

    setEmail("")
    setDob("")
    setName("")
    setPassword("")
    setPhoneNumber("")
    setGender("")


    // submit form data
  }
    function showToggle() {
        
          return (
            <div className='toggle'>
            Existing User?
            <div className='toggle-button' onClick={()=>{
                props.setForm(1)}}>
              Sign In.
            </div>
          </div>
          );
        
        
      }
  return (
    <div className="SignForm">
        {showToggle()}
        
        <form onSubmit={handleSubmit}>
        
         <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
         
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
         
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
         
       
         
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
         
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
         
        <label>
          Gender:
          <input type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} /> Female
          <input type="radio" value="other" checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} /> Other
        </label>
         
        <input type="submit" value="Submit" />
         
      </form>
      
    </div>
  )
}
