import React from "react";
import { useSelector } from "react-redux";

export const Perfil = () => {
  const store = useSelector((store) => store);

  
  console.log(store);

  return (
    <div>
      Apellido: {store.user.apellido}
      <br />
      Nombre:{store.user.nombre}
      <br />
      El correo registrado con nosotros es: {store.user.email}
      <br />
      <div>
        
      </div>
    </div>
  );
};
