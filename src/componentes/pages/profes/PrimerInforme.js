import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfeInformeAction } from "../../../redux/pokeInforme";
import { getProfeProyectoAction } from "../../../redux/pokeProyecto";

import { FileUpload1Informe } from "../../file/FileUpload1Informe";
import { FileUpload2Informe } from "../../file/FileUpload2Informe";

import './mismaterias.css'

export const PrimerInforme = () => {

  
  const dispatch = useDispatch();
  const { dni, apellido } = useSelector((store) => store.user);
  const informe = useSelector( (store) => store.informe);

  
  useEffect(() => {

    try {
      dispatch(getProfeInformeAction(dni));
      dispatch(getProfeProyectoAction(dni));
      
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, dni]);
  
  const materia = informe.array;

  // console.log('mi proyecto:' ,proyecto)

  var fecha = new Date();
  var anio = fecha.getFullYear();

  return (
    <>
      <h3>- INFORMES -{ anio }</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive-sm">
            <table className="table table-striped  table-responsive-sm">
              <thead className="thead-dark">
                <tr >
    
                  <th><small>CARRERA</small></th>
                  <th><small>MATERIA</small></th>
                  <th  className="text-left">
                    <small>1-INFORME </small>
                  </th>
                  <th scope="col" className="text-left">
                    <small>2-INFORME</small>
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
                      {mate.inf1 ? (
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
                           <FileUpload1Informe
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
                    {mate.inf2 ? (
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
                        <h3>DICIEMBRE</h3>
                      //  <FileUpload2Informe
                      //   tipo='proyecto'
                      //   rapida={mate.id_rapida}
                      //   anio={anio}
                      //   carrera={mate.carrera_nombre}
                      //   curso={mate.curso}
                      //   materia={mate.materia_nombre}
                      //   apellido={apellido}
                      // /> 
                        
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
