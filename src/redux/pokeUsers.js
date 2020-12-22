import Axios from "axios";
import { types } from "./types";
import * as varss from '../redux/varss'
// constantes

const initState = {
  logged: false,
  user: {},
};

// types


// reducer

export const authUserReducer = (state = initState, action) => {
  switch (action.type) {
    case types.login:
      // console.log(types.login.payload)
      return {
        ...action.payload,
        state,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

// actions
export const getUsersAction = (dni) => async (dispatch, getState) => {
  const uri = varss.uri
  try {
    const res = await Axios.get(uri + `busca_profe.php?id=${dni}`);
    dispatch({
      type: types.login,
      isAuthenticated: true,
      payload: res.data[0],
    });
    //console.log(" se manda", res.data);//
    //   localStorage.setItem("user", JSON.stringify(res.data[0]));
  } catch (error) {
    console.log(error);
  }
  //   }
};
