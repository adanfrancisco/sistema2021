import React from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Perfil } from '../componentes/pages/Perfil';
import { Admin } from '../componentes/pages/Admin';
import { Auditoria } from '../componentes/pages/admin/Auditoria';
import { Informe } from '../componentes/pages/admin/Informe';

import { NoAdmin } from '../componentes/pages/NoAdmin';
import Listar from '../componentes/pages/admin/profes/Listar';
import { Mesita } from '../componentes/pages/admin/Mesita';
import { Cumples } from '../componentes/pages/admin/profes/Cumples';

export const SuperAdminRoutes = () => {
    const {legajo} = useSelector(store => store.user)

    return (
        <div>
            {/* soy ADminRoute --- {legajo} */}
            {/* {console.log('SuperAdmin')} */}

            {
            (legajo==='5')
            
            ?
            <>
            <div className="container mt-2">
                <Switch>
                   
                    <Route exact path="/listado" component={Listar}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/perfil" component={Perfil}/>
                    <Route exact path="/auditoria" component={Auditoria}/>
                    <Route exact path="/informe" component={Informe}/>
                    <Route exact path="/mesita" component={Mesita}/>
                    <Route exact path="/cumples" component={Cumples}/>
                    
                    <Redirect to="/listado" />

                </Switch>
            </div>
            </>
            :
            <>
            <div className="container mt-2">
                <Switch>
                   
                    <Route exact path="/noadmin" component={NoAdmin}/>
                    {/* <Route exact path="/asignaprofe" component={ProfesAMateria}/> */}

                    <Redirect to="/materias" />
                </Switch>
            </div>
            </>
        }
        </div>
    )
}
