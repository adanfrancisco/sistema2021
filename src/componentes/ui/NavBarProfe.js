import React from 'react'
import { Link } from 'react-router-dom'

import { ProfeBarData } from "./ProfeBarData";


export const NavBarProfe = () => {


  return (
    
    <div>
    
      <ul className="nav">
      { ProfeBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link className={item.cName} to={item.path}>
                   {item.title}
                </Link>
              </li>
            );
          })}
        
      </ul>
      
    </div>
  )
}

