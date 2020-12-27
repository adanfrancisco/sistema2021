// imports
import Axios from "axios";
import { types } from "./types";
import * as varss from './varss'

// const

const initState = {array:[]};

// reducers
export const profeProyectoReducer = (state = initState, action) => {
    switch (action.type) {
      case types.profe_proyecto:
        return {
          ...state, array:action.payload
        };
      default:
        return state;
    }
  };

// actions
export const getProfeProyectoAction = (dni) => async (dispatch, getState) => {
  try {
    const res = await Axios.get(varss.uri + `profe_materia_proyecto.php?id=${dni}`);
    dispatch({
      type: types.profe_proyecto,
      payload: res.data,
    });
    // console.log('datos',res.data)
    // console.log(" se manda", res.data);//
    //   localStorage.setItem("user", JSON.stringify(res.data[0]));
  } catch (error) {
    console.log(error);
  }
}
export const getProfeMateriaAction = (dni) => async (dispatch, getState) => {
    // const uri = "https://is93.aloeadan.com/api/";
    try {
      const res = await Axios.get(varss.uri + `profe_materia.php?id=${dni}`);
      dispatch({
        type: types.profe_materia,
        payload: res.data,
      });
      // console.log('datos',res.data)
      // console.log(" se manda", res.data);//
      //   localStorage.setItem("user", JSON.stringify(res.data[0]));
    } catch (error) {
      console.log(error);
    }
    
    //   }
  };