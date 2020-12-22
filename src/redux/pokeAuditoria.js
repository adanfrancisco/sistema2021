import Axios from "axios";
import * as varss from '../redux/varss'
// types
export const types = {
    auditoria: "[view] auditoria",
  };

//reducer
const initState = {array:[]};
export const audiReducer = (state = initState, action) => {
    switch (action.type) {
      case types.auditoria:
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