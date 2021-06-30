import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { NavbarAdmin } from "./NavbarAdmin";
import { NavBarAlumno } from "./NavBarAlumno";
import { NavBarProfe } from "./NavBarProfe";
import { NavbarSAdmin } from "./NavbarSAdmin";
// import { NavbarSAdmin } from "./NavbarSAdmin";



export const Navbar = () => {
  const { legajo } = useSelector((store) => store.user);
  const [legajin, setLegajin] = useState("Visitante");
  
  useEffect(() => {
    // console.log(legajo);
    if (legajo) setLegajin(leg(legajo.toString()));
      
  }, [legajo]);

  // console.log(legajin)

  function leg(legajo) {
    switch (legajo.toString()) {
      
      case "5":
        return "SuperAdmin";
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

  

  return (
    <>
      
      
      <div className="p-1 mb-1 bg-primary text-white"></div>

        {legajin === "SuperAdmin" ? <NavbarSAdmin /> : ""}
        {legajin === "4" ? <NavBarAlumno /> : ""}
        {legajin === "Administrador" ? <NavbarAdmin /> : ""}
        {legajin === "2" ? <NavbarAdmin /> : ""}
        {legajin === "Profesor" ? <NavBarProfe /> : ""}
      <div className="p-1 mb-1 bg-primary text-white"></div>
    </>
  );
};
