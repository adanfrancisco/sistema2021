import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import * as varss from "../../redux/varss";
import "./file.css";

export const FileUploadProyecto = (props) => {
  console.log("prop1 - ", props.tipo);
  const { apellido } = useSelector((store) => store.user);
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
    setDesactiva(true);
    const data = new FormData();
    data.append("file", file);

    // let url = varss.uriUpload + "analitico_upload.php";
    let url = varss.uriUpload + "aproyecto_upload.php";

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
            varss.uri +
            "profe_aproyecto.php?rapida=" +
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
// console.log(url)
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

  return (
    <>
      <form onSubmit={handleEnviar}>
        <div className="custom-file ">
          {ok ? (
            <>
              {!file ? (
                <>
                  <div className="file-select" id="src-file1">
                 
                    <input
                      type="file"
                      id="customFile"
                      style={{
                        height:'1px',
                        width: "100px",
                      }}
                      onChange={onChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  {ok ? (
                    <button
                      className="btn btn-primary btn-right"
                      disabled={desactiva}
                    >
                      {!desactiva ? "Enviar" : <>Espere..</>}
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
