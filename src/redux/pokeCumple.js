import Axios from "axios";
import * as varss from './varss'
// types
export const types = {
    cumple: "[view] cumpleanos",
  };

//reducer
const initState = {array:[]};
export const cumpleReducer = (state = initState, action) => {

    switch (action.type) {

      case types.cumple:
        return {
          array:action.payload,
        };

      default:
        return state;

    }
  };


  //actions
  export const cumpleAction = () => async (dispatch, getState) => {
    const uri = varss.uri
  
    try {
      const res = await Axios.get(uri + "fechas.php");
      dispatch({
        type: types.cumple,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 
 