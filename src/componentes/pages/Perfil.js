import React from "react";
import { useSelector } from "react-redux";

export const Perfil = () => {
  const store = useSelector((store) => store);

  
  // console.log(store);

  return (
    <div>
      Apellido: {store.user.apellido}
      <br />
      Nombre:{store.user.nombre}
      <br />
      Su correo registrado con nosotros es: <b>{store.user.email}</b> <br/>
      
      <br />
      <div>
        
      </div>
    </div>
  );
};
