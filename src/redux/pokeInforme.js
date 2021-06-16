// imports
import Axios from "axios";
import { types } from "./types";
import * as varss from './varss'

// const

const initState = {array:[]};

// reducers
export const profeInformeReducer = (state = initState, action) => {
    switch (action.type) {
      case types.profe_inf1:
        return {
          ...state, array:action.payload
        };
      default:
        return state;
    }
  };

// actions
export const getProfeInformeAction = (dni) => async (dispatch, getState) => {
  try {
    const res = await Axios.get(varss.uri + `profe_materia_informe1.php?id=${dni}`);
    dispatch({
      type: types.profe_inf1,
      payload: res.data,
    });
    // console.log('datos',res.data)

  } catch (error) {
    console.log(error);
  }
}
export const getProfeMateriaAction = (dni) => async (dispatch, getState) => {
    // const uri = "https://is93.aloeadan.com/api/";
    try {
      const res = await Axios.get(varss.uri + `profe_materia_informe2.php?id=${dni}`);
      dispatch({
        type: types.profe_inf2,
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