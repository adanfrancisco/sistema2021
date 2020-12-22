import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

import * as MdIcons from "react-icons/md";
import { SidebarData } from "./SidebarData";
import "./navbar.css";

export const NavBarProfeM = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link className="menu-bars" to="#">
          <MdIcons.MdAccessAlarms onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu-active"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <link  className="menu-bars" to="#">
              <MdIcons.MdAccessAlarms onClick={showSidebar} />
            </link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link className={item.cName} to={item.path}>
                   {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
