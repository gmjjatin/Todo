import React from "react";
import Homeicon from "../../assets/icons/home.png";
import Statsicon from "../../assets/icons/stats.png";
import Projectsicon from "../../assets/icons/projects.png";
import Chaticon from "../../assets/icons/chat.png";
import Calendaricon from "../../assets/icons/calendar.png";
import Settingicon from "../../assets/icons/setting.png";
import Logouticon from "../../assets/icons/logout.png";

import "./styles.scss";
const sideTabs = [
  { name: "Overview", icon: Homeicon },
  { name: "Stats", icon: Statsicon },
  { name: "Projects", icon: Projectsicon },
  { name: "Chat", icon: Chaticon },
  { name: "Calendar", icon: Calendaricon },
];

const sideOptions = [
  { name: "Setting", icon: Settingicon },
  { name: "Log Out", icon: Logouticon },
];
export default function Sidebar({ title, setTitle }) {
  return (
    <div className="sidebar">
      <span className="title">.taskez</span>
      <div className="vertical-tabs">
        {sideTabs.map((data) => (
          <div className="tab" onClick={() => setTitle(data.name)}>
            <span className={`text ${title === data.name ? "active" : ""}`}>
              <img src={data.icon} alt="" />
              {data.name}
            </span>
          </div>
        ))}
      </div>
      <div className="vertical-tabs bottom">
        {sideOptions.map((data) => (
          <div className="tab">
            <span className="text">
              <img src={data.icon} alt="" />
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
