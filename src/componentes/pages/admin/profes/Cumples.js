import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cumpleAction } from '../../../../redux/pokeCumple';


export const Cumples = () => {

    const cumple = useSelector((store) => store.cumples);

    const dispatch = useDispatch();

  
    const cumplex = cumple.array;
// console.log(cumplex);


    useEffect(() => {
      dispatch(cumpleAction());
      // yearActual();
    }, [dispatch]);

    function mesActual(){
        var meses=['Enero','Febrero','Marzo','Abril','Mayo',
        'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

        var hoy = new Date()
        var mes = hoy.getMonth() 
        return meses[mes]
    }

    function calcularEdad(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }
// formateo de fecha


    
    return (
        <>
        <h3 >Profesores que cumplen años en {mesActual()}</h3>
             <div className="row">
          <div className="col-md-12">
            <div className="table-compressed table-responsive">
              <table className="table users table-hover table-dark">
                
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">NACIMIENTO</th>
                    <th scope="col">VIDA</th>
                  </tr>
                </thead>

                <tbody>
                  {cumplex.map((cumple, index) => (
                    <tr key={cumple.dni}>
                        <td>{ cumple.apellido }</td>
                        <td>{ 
                         
                         moment(cumple.mifecha).format('D/MM/YYYY')
                        }</td>
                        <td>{ 
                        calcularEdad( cumple.mifecha )

                        }</td>

                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <strong>Total de Cumpleaños</strong>
                    </td>
                    <td className="text-right thead-dark">
                      <strong>{Object.keys(cumplex).length}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        </>
    )
    
}
