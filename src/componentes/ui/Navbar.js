import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { NavbarAdmin } from "./NavbarAdmin";
import { NavBarAlumno } from "./NavBarAlumno";
import { NavBarProfe } from "./NavBarProfe";
import { NavbarComun } from "./NavbarComun";



export const Navbar = () => {
  const {  legajo } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [legajin, setLegajin] = useState("Visitante");
  
  useEffect(() => {
    // console.log(legajo);
    if (legajo) setLegajin(leg(legajo.toString()));
      
  }, [legajo]);

  // console.log(legajin)

  function leg(legajo) {
    switch (legajo.toString()) {
      case "4":
        return "Alumno";
      case "3":
        return "Administrador";
      case "2":
        return "Preceptor";
      case "1":
        return "Profesor";
      default:
        return "";
    }
  }

  const handleLogout = () => {
    history.replace("/");
    localStorage.clear();
    dispatch({type: types.logout,})

    
  };

  return (
    <>
      <div className="p-1 mb-1 bg-primary text-white"></div>
      <nav className="navbar  navbar-dark bg-dark">
 
        {legajo ? (
          <NavbarComun/>
        ) : (
          ""
        )}
        <button
          className="navbar-brand nav-item nav-link  btn-danger "
          onClick={handleLogout}
        >
          Salir
        </button>
      </nav>
      <div className="p-1 mb-1 bg-primary text-white"></div>
        {legajin === "4" ? <NavBarAlumno /> : ""}
        {legajin === "Administrador" ? <NavbarAdmin /> : ""}
        {legajin === "2" ? <NavbarAdmin /> : ""}
        {/* {legajin === "Profesor" ? <NavBarProfeM /> : ""} */}
        {legajin === "Profesor" ? <NavBarProfe /> : ""}
      <div className="p-1 mb-1 bg-primary text-white"></div>
    </>
  );
};
