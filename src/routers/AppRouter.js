// import React, { useContext } from 'react'
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { DashboardRoutes } from "./DashboardRoutes";
import { LoginScreen } from "../componentes/login/LoginScreen";
import { getUsersAction } from "../redux/pokeUsers";

export const AppRouter = () => {
  const user = useSelector((store) => store.user);
  const { dni, apellido, nombre, legajo } = useSelector((store) => store.user);

  const logged = user.logged;
    const dispatch = useDispatch()
  console.log('logueado:',logged, 'legajo: ',legajo);
   
compruebaUsuario()

 function  compruebaUsuario(){
  try {
    if (localStorage.getItem("usuario")) {
        const { dni } = JSON.parse(localStorage.getItem("usuario"));
        if(!apellido)dispatch(getUsersAction(dni))
        console.log("hay usuario", dni);
    } else {
      if (dni) {
        console.log("estoy aqui", legajo, dni);
        localStorage.setItem(
          "usuario",
          JSON.stringify({
            dni: dni,
            apellido: apellido,
            nombre: nombre,
            legajo: legajo,
          })
        );
        localStorage.setItem("logged", JSON.stringify({ logged: true }));
      } else {
        localStorage.clear();
        console.log('No hay usuario')
      }
    }
  } catch (error) {}

 }



  return (
    <>
      {/* {
             logged?'Dentro':'Fuera'
             } */}

      <Router>
        <div>
          <Switch>
            <PublicRoute
              exact
              path="/login"
              component={LoginScreen}
              isAuthenticated={user.logged}
            />

            <PrivateRoute
              path="/"
              component={DashboardRoutes}
              isAuthenticated={user.logged}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};
