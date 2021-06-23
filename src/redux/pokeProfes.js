// imports
import Axios from "axios";
import { types } from "./types";
import * as varss from '../redux/varss'

// const

const initState = {array:[]};

// reducers
export const profeMateReducer = (state = initState, action) => {
    switch (action.type) {
      case types.profe_materia:
        return {
          ...state, array:action.payload
        };
      case types.profe_listado:
        return {
          ...state, array:action.payload
        };
      default:
        return state;
    }
  };

// actions

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
  };
export const getProfeListadoAction = (dni) => async (dispatch, getState) => {
    // const uri = "https://is93.aloeadan.com/api/";
    try {
      const res = await Axios.get(varss.uri + `profes_read.php`);
      dispatch({
        type: types.profe_listado,
        payload: res.data,
      });
      // console.log('datos',res.data)
      // console.log(" se manda", res.data);//
      //   localStorage.setItem("user", JSON.stringify(res.data[0]));
    } catch (error) {
      console.log(error);
    }
  };