import { Checkbox, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import "./styles.scss";

export default function Tabs() {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="tabs">
        <div
          onClick={() => setActive(1)}
          className={`tab ${active === 1 ? "active" : ""}`}
        >
          Log In
        </div>
        <div
          onClick={() => setActive(2)}
          className={`tab ${active === 2 ? "active" : ""}`}
        >
          Sign up
        </div>
      </div>
      {active === 1 ? <Login /> : <Register />}
    </>
  );
}
