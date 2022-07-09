import React from "react";
import Searchicon from "../../assets/icons/search.png";
import Groupicon from "../../assets/profile/group.png";
import Profilepicicon from "../../assets/profile/profile-pic.png";

import "./styles.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="search">
        <img src={Searchicon} alt="" />
        <input type="text" placeholder="Search" />
      </span>
      <span className="members">
        <img src={Groupicon} alt="" />
      </span>
      <span className="profile">
        Hi Saundarya
        <img src={Profilepicicon} alt="" />
      </span>
    </div>
  );
}
