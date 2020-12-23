import React from 'react'
import { useSelector } from 'react-redux';

export const NavbarComun = () => {

    const { apellido, nombre  } = useSelector((store) => store.user);

    return (
       
        <div className="navbar-brand">
        <img src="../assets/instibarra.jpeg" alt="ISFDYT 93" />
          <h6 className="text-center" >
            {apellido}, {nombre} 
          </h6>
        </div>
         
     
    )
}
