import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsersAction } from "../../redux/pokeUsers";

export const RegisterScreen = () => {
  const [datos, setDatos] = useState(0);



  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    // console.log(datos.dni);
  };

  const dispatch = useDispatch();
  const enviarDatos = (event) => {
    event.preventDefault();
    try {
      dispatch(getUsersAction(datos.dni));
      // console.log(datos)
    } catch (e) {
      console.log(e)
    }
    // console.log("enviando datos..." + datos.dni);
  };

  return (
    <div className="container container-fluid"> 
        <img src="../assets/insti.jpeg" alt="ISFDYT 93" className="mx-auto d-block" />

      
        <form className="form border p-3 form mx-auto d-block">
          <div className="form-group">
            <input
              type="number"
              
              name="dni"
              className="form-control"
              id="dni"
              placeholder="codigo numerico"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block btn-large"
            onClick={enviarDatos}
          >
            Entrar
          </button>
        <button
            type="submit"
            className="btn btn-secondary btn-block btn-large"
            onClick={enviarDatos}
          >
            Registrarme como Alumno
          </button>
        </form>
      </div>
  );
};
