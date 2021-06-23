import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Perfil } from "../componentes/pages/Perfil";
import { Materia } from "../componentes/pages/profes/Materia";
import { Mesa } from "../componentes/pages/profes/Mesa";
import { Mismaterias } from "../componentes/pages/profes/Mismaterias";
import { PrimerInforme } from "../componentes/pages/profes/PrimerInforme";

export const ProfeRoutes = () => {




  return <div>
  {/* Soy ProfeRoutes -- {legajo} */}
  
  <div className="container mt-2">
                <Switch>
                   
                    <Route exact path="/mismaterias" component={Mismaterias}/>
                    <Route exact path="/informes" component={PrimerInforme}/>
                    <Route exact path="/mesa" component={Mesa}/>
                    <Route exact path="/perfil" component={Perfil}/>
                    <Route exact path="/materia" component={Materia }/>
                  

                    

                    <Redirect to="/perfil" />
                </Switch>
            </div>
  
  
  </div>;
};
