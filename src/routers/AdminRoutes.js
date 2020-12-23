import React from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Admin } from '../componentes/pages/Admin';
import { Auditoria } from '../componentes/pages/admin/Auditoria';
import { NoAdmin } from '../componentes/pages/NoAdmin';
import { Perfil } from '../componentes/pages/Perfil';

export const AdminRoutes = () => {
    const {legajo} = useSelector(store => store.user)

    return (
        <div>
            {/* soy ADminRoute --- {legajo} */}

            {
            (legajo==='3')
            ?
            <>
            <div className="container mt-2">
                <Switch>
                   
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/perfil" component={Perfil}/>
                    <Route exact path="/auditoria" component={Auditoria}/>
                    

                    <Redirect to="/admin" />
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
