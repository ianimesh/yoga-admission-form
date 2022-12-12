import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function calculateAge(dob) {
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();
  var monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}


export default function SignUpForm(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');







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
    var dd = new Date(dob);
    var age = calculateAge(dd);

    if (age < 18 || age > 65) {
      alert("Age should be between 18 and 65")
    }

    if (!gender) {
      alert("Invalid Gender")
      return;
    }

    // To Do Submit

    var data = {
      email: email,
      name: name,
      phone_number: phoneNumber,
      date_of_birth: dob,
      password: password,
      gender: gender
    }

    axios.post('https://yogabackend-production.up.railway.app/add_subscriber/', data)
      .then(response => {
        console.log(response.data);
      }).then(() => {
        axios.post('https://yogabackend-production.up.railway.app/login/', data)
          .then(response => {
            console.log(response.data);
            localStorage.setItem("user", response.data)
            navigate('/dashboard')
          })
      })
      .catch(error => {
        console.log(error)
      });

    // submit form data
  }
  function showToggle() {

    return (
      <div className='toggle'>
        Existing User?
        <div className='toggle-button' onClick={() => {
          props.setForm(1)
        }}>
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
          Gender:
          <div className="radioContainer">
            <input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male
            <input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female
            <input type="radio" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} /> Other
          </div>
        </label>


        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>

        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>





        <input type="submit" value="Sign Up" />

      </form>

    </div>
  )
}
