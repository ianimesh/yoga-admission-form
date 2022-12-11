import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function SignInForm(props) {
     const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    if(email===""||password===""){
      alert("empty username/password")
      return
    }

    const data = {
      email: email,
      password: password
    };
    
    axios.post('https://yogabackend-production.up.railway.app/login/', data)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("user",response.data)
        navigate('/dashboard')
      })
      .catch(error => {
        alert("Invalid UserName/Password")
      });
    
    setEmail('');
    setPassword('');
  }

 
    
    function showToggle() {

        
        
        return (
          <div className='toggle'>
            New User?
            <div className='toggle-button' onClick={()=>{
                props.setForm(0)}}>
              Sign Up.
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
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <input type="submit" value="Sign In" />
    </form>
  </div>
)
}
