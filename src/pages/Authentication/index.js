import React, { useState } from "react";
import Tabs from "../../components/Tabs";

import "./styles.scss";

export default function Authentication() {
  return (
    <div className="authentication">
      <div className="img-grafiti">
        <img src="https://i.ibb.co/sJjBDk1/Group.png" alt="" />
      </div>
      <div className="box">
        <Tabs />
      </div>
    </div>
  );
}
