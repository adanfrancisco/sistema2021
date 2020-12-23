import React from "react";
import { Link } from "react-router-dom";
import {AdminBarData} from './AdminBarData'


export const NavbarAdmin = () => {
  return (
    <div>
      <ul className="nav">
      { AdminBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link className={item.cName} to={item.path}>
                   {item.icon}{item.title}
                </Link>
              </li>
            );
          })}
        
      </ul>
    </div>
  );
};
