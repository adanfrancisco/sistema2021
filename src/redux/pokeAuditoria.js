import Axios from "axios";
import * as varss from '../redux/varss'
// types
export const types = {
    auditoria: "[view] auditoria",
    audinf: "[view] audi informe",
    audimesa: "[view] audi mesa",
  };

//reducer
const initState = {array:[]};
export const audiReducer = (state = initState, action) => {

    switch (action.type) {

      case types.auditoria:
        return {
          array:action.payload,
        };

      case types.audinf :
        return {
          array:action.payload,
        };

      case types.audimesa :
        return {
          array:action.payload,
        };

      default:
        return state;

    }
  };


  //actions
  export const auditoriaAction = () => async (dispatch, getState) => {
    const uri = varss.uri
  
    try {
      const res = await Axios.get(uri + "profe_materia_auditoria.php");
      dispatch({
        type: types.auditoria,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  export const auditoriaInformeAction = () => async (dispatch, getState) => {
    const uri = varss.uri
  
    try {
      const res = await Axios.get(uri + "profe_materia_audinforme.php");
      dispatch({
        type: types.audinf,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  export const auditoriaMesaaction = () => async (dispatch, getState) => {
    const uri = varss.uri
  
    try {
      const res = await Axios.get(uri + "profe_materia_mesa.php");
      dispatch({
        type: types.audimesa,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };