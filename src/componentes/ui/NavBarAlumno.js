import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarAlumno = () => {
    return (
        <div>
      <ul className="nav-item navbar-nav ">
        <Link className="navbar-brand  nav-link btn" to="/perfil">
          {" "}
          Perfil
        </Link>
        <Link className="navbar-brand  nav-link btn" to="/notas">
          {" "}
          Materias
        </Link>
        
      </ul>
    </div>
    )
}
