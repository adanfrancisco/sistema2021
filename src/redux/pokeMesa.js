// imports
import Axios from "axios";
import { types } from "./types";
import * as varss from './varss'

// const

const initState = {array:[]};

// reducers
export const profeMesaReducer = (state = initState, action) => {
    switch (action.type) {
      case types.profe_mesal:
        return {
          ...state, array:action.payload
        };
      
      default:
        return state;
    }
  };

// actions

export const getProfeMesalAction = (dni) => async (dispatch, getState) => {
  try {
    const res = await Axios.get(varss.uri + `profe_materia_rl.php?id=${dni}`);
    dispatch({
      type: types.profe_mesal,
      payload: res.data,
    });
    // console.log('datos',res.data)

  } catch (error) {
    console.log(error);
  }
}

    
