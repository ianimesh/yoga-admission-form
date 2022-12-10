import React from 'react'
import { useState } from 'react';
export default function SignInForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  // Function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // TODO: Validate the username and password

    // TODO: Submit the username and password to the server

    // Clear the form fields
    
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
