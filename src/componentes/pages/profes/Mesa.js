import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfeMesalAction } from "../../../redux/pokeMesa";
import { getProfeProyectoAction } from "../../../redux/pokeProyecto";


import { FileUploadFinalLibre } from "../../file/FileUploadFInalLibre";
import { FileUploadFinalRegular } from "../../file/FileUploadFInalRegular";
// import { FileUpload2Informe } from "../../file/FileUpload2Informe";

import './mismaterias.css'

export const Mesa = () => {

  
  const dispatch = useDispatch();
  const { dni, apellido } = useSelector((store) => store.user);
  const mesa = useSelector( (store) => store.mesa);

  
  useEffect(() => {

    try {
      dispatch(getProfeMesalAction(dni));
      dispatch(getProfeProyectoAction(dni));
      
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, dni]);
  
  const materia = mesa.array;

  // console.log('mi proyecto:' ,proyecto)

  var fecha = new Date();
  var anio = fecha.getFullYear();

  return (
    <>
      <h3>- MESAS -{ anio }</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive-sm">
            <table className="table table-striped  table-responsive-sm">
              <thead className="thead-dark">
                <tr >
    
                  <th><small>CARRERA</small></th>
                  <th className="text-center"><small>MATERIA</small></th>
                  <th  className="text-center">
                    <small>REGULAR </small>
                  </th>
                  <th scope="col" className="text-center">
                    <small>LIBRE</small>
                  </th>
                </tr>
              </thead>

              <tbody>
                {materia.map((mate, index) => (
                  <tr key={mate.id_materia} >
 
                    <td  ><small>{
                      (mate.carrera_nombre).toString().slice(0,9)
                      }</small></td>
                    <td><small>{mate.materia_nombre}</small></td>
                    <td><center>
                      {/* Aqui debo corroborar si existe el archivo en la bd, 
                      de se asi, solo muestro el OK */}
                      {mate.mesar ? (
                        <>
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                          
                        </>
                      ) : (
                        //1 informe
                           <FileUploadFinalRegular
                        tipo='analitico'
                        rapida={mate.id_rapida}
                        anio={anio}
                        carrera={mate.carrera_nombre}
                        curso={mate.curso}
                        materia={mate.materia_nombre}
                        apellido={apellido}
                      /> 
                        
                      )}
                      </center>
                    </td>
                    <td><center>
                    {mate.mesal ? (
                        <>
                        
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                          
                        </>
                      ) : (
                        //2 Informe
                        // <h3>DICIEMBRE</h3>
                       <FileUploadFinalLibre
                        tipo='proyecto'
                        rapida={mate.id_rapida}
                        anio={anio}
                        carrera={mate.carrera_nombre}
                        curso={mate.curso}
                        materia={mate.materia_nombre}
                        apellido={apellido}
                      /> 
                        
                      )}
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-dark">
                  <td  className="text-white" colSpan="2">
                    <strong>Total de Materias</strong>
                  </td>
                  <td className="text-right text-white">
                    <strong>{Object.keys(materia).length}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* <strong>{Object.keys(materia).length}</strong> */}
    </>
  );
};
// import React from 'react'

// export const Mesa = () => {
//   return (
//     <div>
//       <h1>Mesas</h1>
//     </div>
//   )
// }
