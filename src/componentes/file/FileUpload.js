import axios from "axios";
import React, {  useState } from "react";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import * as varss from '../../redux/varss'

export const FileUpload = (props) => {
  const {apellido} = useSelector(store => store.user)
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [extension, setExtension] = useState("");
  const [ok, setOk] = useState(1);
  const [desactiva, setDesactiva] = useState(false);

  const onChange = (e) => {
    let extenxion = e.target.files[0].name.slice(
      ((e.target.files[0].name.lastIndexOf(".") - 1) >>> 0) + 2
    );
    if (extenxion === "pdf" || extenxion === "doc" || extenxion === "docx") {
      // alert('correcto') 
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setExtension(
        e.target.files[0].name.slice(
          ((e.target.files[0].name.lastIndexOf(".") - 1) >>> 0) + 2
        )
      );
    } else {
      swal("Incorrecto", "Solo se acepta PDF y archivos de WORD", "warning");

      setOk(1);
    }

    console.log(extenxion);
  };

  function handleEnviar(e) {
    e.preventDefault();
    setDesactiva(true)
    const data = new FormData();
    data.append("file", file);

    let url = varss.uriUpload + "upload.php";

    axios
      .post(url, data, {
        params: {
          ra: props.rapida,
          an: props.anio,
          ca: props.carrera,
          cu: props.curso,
          mat: props.materia,
          ape: apellido,
        },
      })
      .then((res) => {
        console.warn(res);
        if (res.status === 200) {
          swal("Registro Guardado!");
          //al comprobar que subi el archivo, hago la insersion en la bd para
          // auditarlo -> profe_analitico

          let url =
            varss.uri +"profe_analitico.php?rapida=" +
            props.rapida +
            "&an=" +
            props.anio +
            "&ca=" +
            props.carrera +
            "&cu=" +
            props.curso +
            "&mat=" +
            props.materia +
            "&ape=" +
            props.apellido +
            "&ext=" +
            extension;

          fetch(url).then((response) => response.json());

          setOk(0);
        } else {
          swal("No se pudo almacenar!");
        }
      })
      .catch((err) => {
        console.log(err);
        swal("No se pudo almacenar!, quiza no tienes internet..");
      });
  }
  // function handleClick(){
  //   console.log('hizo clic')
  //   setDesactiva(true)
    

  // }
  return (
    <>
      <form onSubmit={handleEnviar}>
        <div className="custom-file ">
          {ok ? (
            <>
              {!file ? (
                <>
                  <input type="file" id="customFile" onChange={onChange} />
                </>
              ) : (
                <>
                  {ok ? (
                    <button className="btn btn-primary btn-right"
                    disabled={desactiva} 
                    >
                     {!desactiva?'Enviar':
                     <>Espere..
                     
                     </>
                     } 
                    </button>
                  ) : (
                    <>
                      {filename}
                      <img
                        src={`../assets/okok.png`}
                        alt="ok"
                        height="20"
                        width="20"
                      />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <img src={`../assets/okok.png`} alt="ok" height="20" width="20" />
            </>
          )}
        </div>
      </form>
    </>
  );
};
