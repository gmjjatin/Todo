import React from "react";
import { GreenCheckbox } from "../Login";

export default function Register() {
  return (
    <div className="form">
      <form action="">
        <input className="input" placeholder="Full name" type={"text"} />
        <input className="input" placeholder="Email" type={"email"} />
        <input
          autoComplete="new-password"
          className="input"
          placeholder="Password"
          type={"password"}
        />
        <button className="button">Sign Up </button>
        <GreenCheckbox checked={true} name="remember" />
        <label htmlFor="remember">Remember me</label>
      </form>
    </div>
  );
}
