import { Checkbox, withStyles } from "@material-ui/core";
import React from "react";
import "./styles.scss";

export const GreenCheckbox = withStyles({
  root: {
    color: "#329C89",
    "&$checked": {
      color: "#329C89",
    },
  },
  checked: {},
})((props) => <Checkbox size="small" color="default" {...props} />);

export default function Login() {
  return (
    <div className="form">
      <form action="">
        <span className="helper">To Continue</span>
        <span className="sub-helper">We need your Name & Email </span>
        <input
          autoComplete="off"
          className="input"
          placeholder="Email"
          type={"email"}
        />
        <input
          autoComplete="new-password"
          className="input"
          placeholder="Password"
          type={"password"}
        />
        <button className="button">Log In </button>
        <GreenCheckbox checked={true} name="remember" />
        <label htmlFor="remember">Remember me</label>
      </form>
    </div>
  );
}
