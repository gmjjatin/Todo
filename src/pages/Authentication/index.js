import React, { useState } from "react";
import Tabs from "../../components/Tabs";
import Authicon from "../../assets/icons/auth.png";

import "./styles.scss";

export default function Authentication() {
  return (
    <div className="authentication">
      <div className="img-grafiti">
        <img src={Authicon} alt="" />
      </div>
      <div className="box">
        <Tabs />
      </div>
    </div>
  );
}
