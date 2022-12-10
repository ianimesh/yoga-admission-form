import React from "react";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import backgroundYoga from "./assets/yoga-girl.png"

export default function Home() {
  const [form, setForm] = useState(0);
  function showForm(form) {
    if (form===0) {
      return <SignUpForm setForm={setForm}/>;
    }
    return <SignInForm setForm={setForm}/>;
  }

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
