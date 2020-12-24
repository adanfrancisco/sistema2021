import Axios from "axios";
import * as varss from "./varss";
// types
export const types = {
  deudores: "[view] deudores",
};

//reducer
const initState = {
  array: [
    {
      apellido: "",
      carrera_nombre: "",
      curso: "",
      diasem: "",
      dni: "",
      id_materia: "",
      id_rapida: "",
      materia_nombre: "",
      nombre: "",
      rapidita: "",
    },
  ],
};

// const initState = {array:[]};
export const deudiReducer = (state = initState, action) => {
  switch (action.type) {
    case types.deudores:
      if (action.payload === null) {
        return initState;
      } else {
        return {
          array: action.payload,
        };
      }
    default:
      return state;
  }
};

//actions
export const deudoresAction = () => async (dispatch, getState) => {
  const uri = varss.uri;

  try {
    const res = await Axios.get(uri + "profe_materia_auditoria_deudores.php");
    dispatch({
      type: types.deudores,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
