import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Notas } from "../componentes/pages/alumno/Notas";
import { Perfil } from "../componentes/pages/Perfil";

export const AlumnoRoutes = () => {
  return (
    <div>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/materias" component={Notas} />
          <Route exact path="/perfil" component={Perfil} />

          <Redirect to="/materias" />
        </Switch>
      </div>
    </div>
  );
};
