// import React, { useContext } from 'react'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import {   useDispatch, useSelector } from "react-redux";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { DashboardRoutes } from "./DashboardRoutes";
import { LoginScreen } from "../componentes/login/LoginScreen";
import { getUsersAction } from "../redux/pokeUsers";


var CryptoJS = require("crypto-js");

export const AppRouter = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch()
  

  //verifico si hay usuario en LocalStorage, si es asi lo solicito al reducer
  useEffect(() => {
    if (localStorage.getItem("usuario")) {
      var miStorage =localStorage.getItem("usuario");
      var bytes  = CryptoJS.AES.decrypt(miStorage.toString(), 'adanAloe99');
      var texto = bytes.toString(CryptoJS.enc.Utf8);
  
      var {dni} = JSON.parse(texto);
      dispatch(getUsersAction(dni));
    }
  }, [dispatch])
  
  // const logged = user.logged;

  return (
    <>
      {/* {
             logged?'Dentro':'Fuera'
             } */}

      <Router>
        <div>
          <Switch>
            <PublicRoute
              exact path="/login"
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
