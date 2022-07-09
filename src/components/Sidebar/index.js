import React from "react";
import Homeicon from "../../assets/icons/home.png";
import Statsicon from "../../assets/icons/stats.png";
import Projectsicon from "../../assets/icons/projects.png";
import Chaticon from "../../assets/icons/chat.png";
import Calendaricon from "../../assets/icons/calendar.png";
import Settingicon from "../../assets/icons/setting.png";
import Logouticon from "../../assets/icons/logout.png";

import "./styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <span className="title">.taskez</span>
      <div className="vertical-tabs">
        <div className="tab">
          <span className="text">
            <img src={Homeicon} alt="" />
            Overview
          </span>
        </div>
        <div className="tab">
          <span className="text">
            <img src={Statsicon} alt="" />
            Stats
          </span>
        </div>
        <div className="tab">
          <span className="text active">
            <img src={Projectsicon} alt="" />
            Projects
          </span>
        </div>
        <div className="tab">
          <span className="text">
            <img src={Chaticon} alt="" />
            Chat
          </span>
        </div>
        <div className="tab">
          <span className="text">
            <img src={Calendaricon} alt="" />
            Calendar
          </span>
        </div>
      </div>
      <div className="vertical-tabs bottom">
        <div className="tab">
          <span className="text">
            <img src={Settingicon} alt="" />
            Setting
          </span>
        </div>
        <div className="tab">
          <span className="text">
            <img src={Logouticon} alt="" />
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
}
