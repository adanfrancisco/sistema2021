import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { types } from "../../redux/types";
import { SAdminBarData } from "./SAdminBarData";
import * as MdIcons from 'react-icons/md'

export const NavbarSAdmin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    history.replace("/");
    localStorage.clear();
    dispatch({type: types.logout,})

    
  };
  const { apellido, nombre } = useSelector((store) => store.user);
  return (
    <div>
      <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
        <div className="navbar-brand">
          <img
            src="../assets/instibarra.jpeg"
            alt="ISFDYT 93"
            className="mx-auto d-block"
          />
          <h6 className="text-center">
            {apellido}, {nombre}
          </h6>
        </div>
        <button
          className="navbar-brand nav-item nav-link  btn-danger "
          onClick={handleLogout}
        >
         <MdIcons.MdPowerSettingsNew/> Salir
        </button>
      </nav>
      <div className="p-1 mb-1 bg-primary text-white"></div>



      
      <ul className="nav">
        {SAdminBarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link className={item.cName} to={item.path}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
