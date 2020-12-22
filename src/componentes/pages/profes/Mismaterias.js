import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfeMateriaAction } from "../../../redux/pokeProfes";
import { FileUpload } from "../../file/FileUpload";

export const Mismaterias = () => {

  
  const dispatch = useDispatch();
  const { dni, apellido } = useSelector((store) => store.user);
  const profe = useSelector((store) => store.profe);

  useEffect(() => {
    try {
      dispatch(getProfeMateriaAction(dni));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, dni]);

  const materia = profe.array;


  var fecha = new Date();
  var anio = fecha.getFullYear();

  return (
    <>
      <h3>PROYECTO ANALITICO ---{ anio }</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table users table-hover">
              <thead className="thead-dark">
                <tr>
    
                  <th scope="col-md-auto">Carrera</th>
                  <th scope="col">Materia</th>
                  <th scope="col" className="text-left">
                    ANALITICO
                  </th>
                </tr>
              </thead>

              <tbody>
                {materia.map((mate, index) => (
                  <tr key={mate.id_materia}>
 
                    <td>{mate.carrera_nombre}</td>
                    <td>{mate.materia_nombre}</td>
                    <td>
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
                        
                           <FileUpload
                        rapida={mate.id_rapida}
                        anio={anio}
                        carrera={mate.carrera_nombre}
                        curso={mate.curso}
                        materia={mate.materia_nombre}
                        apellido={apellido}
                      /> 
                        
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-dark">
                  <td className="text-white" colSpan="4">
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

      <strong>{Object.keys(materia).length}</strong>
    </>
  );
};
