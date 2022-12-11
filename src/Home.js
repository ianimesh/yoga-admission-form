import React from "react";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import backgroundYoga from "./assets/pexels.jpg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [form, setForm] = useState(1);
  const navigate = useNavigate();
  function showForm(form) {
    if (form===0) {
      return <SignUpForm setForm={setForm}/>;
    }
    return <SignInForm setForm={setForm}/>;
  }

  useEffect(() => {
    if(localStorage.getItem("user"))
      navigate('/dashboard')
  }, [])

  return (
    <div className="home">
      <div className="image-section">
        <img src={backgroundYoga}></img>
      </div>
      <div className="form-section">
        {showForm(form)}
      </div>
    </div>
  );
}
