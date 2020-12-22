import React, { useEffect, useState } from "react";
import { FileUpload } from "../../file/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { auditoriaAction } from "../../../redux/pokeAuditoria";

export const Auditoria = () => {
  // const Xvar =useContext(VarContext)

  const { apellido } = useSelector((store) => store.profe);
  const dispatch = useDispatch();
  const mate = useSelector((store) => store.auditor);
  const materia = mate.array;
  const [anio, setAnio] = useState(0);

  function yearActual() {
    var f = new Date();
    setAnio(f.getFullYear());
  }
  useEffect(() => {
    dispatch(auditoriaAction());
    yearActual();
  }, [dispatch]);

  return (
    <div>
      
        {/* Profesor: {apellido}, {name} -- {dni} */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-compressed table-responsive">
              <table className="table users table-hover">
                <thead className="thead-dark">
                  <tr>
                    {/* <th scope="col">#</th> */}
                    {/* <th scope="col" className="text-center">
                      Año
                    </th> */}
                    <th scope="col">Carrera</th>
                    <th scope="col">Materia</th>
                    <th scope="col">Profe</th>
                    <th scope="col" className="text-left">
                      Analitico
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {materia.map((mate, index) => (
                    <tr key={mate.id_materia + mate.dni}>
                      {/* <td> */}
                        {/* {index + 1} */}
                        {/* {mate.diasem} */}
                        {/* {mate.rapidita} */}
                        {/* -{mate.id_rapida} */}
                        {/* -{mate.id_materia} */}
                      {/* </td> */}
                      {/* <td className="text-center">{

                        mate.curso
                        }</td> */}
                      <td>{mate.curso.charAt(0)} {mate.carrera_nombre}</td>
                      <td>{mate.materia_nombre}</td>
                      <td>
                        {mate.apellido}-{mate.dni}
                      </td>
                      <td>
                        {/* Aqui debo corroborar si existe el archivo en la bd, de se asi, solo muestro el OK */}
                        {mate.rapidita ? (
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
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
                  <tr>
                    <td colSpan="4">
                      <strong>Total de Materias</strong>
                    </td>
                    <td className="text-right thead-dark">
                      <strong>{Object.keys(materia).length}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      
    </div>
  );
};
