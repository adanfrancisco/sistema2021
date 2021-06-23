import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getProfeListadoAction } from '../../../../redux/pokeProfes';



const Listar = () => {

    const profe = useSelector((store) => store.profe);
    const dispatch = useDispatch();


    const profes = profe.array;

    useEffect(() => {
        dispatch(getProfeListadoAction());
        // yearActual();
      }, [dispatch]);
    
    return (
        <div className="row">
            <div className="col-md-6">
            <table className="table users table-hover table-dark">

            <thead className="thead-dark">
                  <tr>
                    {/* <th scope="col">#</th> */}
                    {/* <th scope="col" className="text-center">
                      Año
                    </th> */}
                    <th scope="col" className="text-center">APELLIDO</th>
                    <th scope="col" className="text-center">NOMBRE</th>
                    {/* <th scope="col" className="text-center">TELEFONO</th> */}
                    <th scope="col" className="text-center">CELULAR</th>
                    <th scope="col" className="text-center">EMAIL</th>
                  </tr>
                </thead>

                <tbody>
                {profes.map((pr, index) => (
                    <tr key={pr.dni}>
                      <td>{pr.apellido}</td>
                      <td>{pr.nombre}</td>
                      {/* <td>{pr.telefono}</td> */}
                      <td><a href={`tel:${pr.celular}`}> {pr.celular} </a></td>
                      <td><a href ={`mailto:${pr.email}?subject=ISFDyT93 Te informa`}>{pr.email}</a> </td>

                    </tr>
                  ))}
                </tbody>

            </table>
            </div>
        </div>
    )
}

export default Listar
