import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfeMateriaAction } from "../../../redux/pokeProfes";
import { getProfeProyectoAction } from "../../../redux/pokeProyecto";
import { FileUpload } from "../../file/FileUpload";
import { FileUploadProyecto } from "../../file/FileUploadProyecto";
import './mismaterias.css'

export const Mismaterias = () => {

  
  const dispatch = useDispatch();
  const { dni, apellido } = useSelector((store) => store.user);
  const profe = useSelector( (store) => store.profe);

  
  useEffect(() => {
    try {
      dispatch(getProfeMateriaAction(dni));
      dispatch(getProfeProyectoAction(dni));
      
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, dni]);
  
  const materia = profe.array;

  // console.log('mi proyecto:' ,proyecto)

  var fecha = new Date();
  var anio = fecha.getFullYear();

  return (
    <>
      <h3>CONTENIDOS -Y- PROYECTO-{ anio }</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive-sm">
            <table className="table table-striped  table-responsive-sm">
              <thead className="thead-dark">
                <tr >
    
                  <th><small>CARRERA</small></th>
                  <th><small>MATERIA</small></th>
                  <th  className="text-left">
                    <small>CONTENIDOS <br/>(para alumno)</small>
                  </th>
                  <th scope="col" className="text-left">
                    <small>PROYECTO (institucion)</small>
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
                      {/* Aqui debo corroborar si existe el archivo en la bd, de se asi, solo muestro el OK */}
                      {mate.rapidita ? (
                        <>
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                          
                        </>
                      ) : (
                        //Analitico
                           <FileUpload
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
                    {mate.proyecto ? (
                        <>
                        
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                          
                        </>
                      ) : (
                        //Proyecto
                           <FileUploadProyecto
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
