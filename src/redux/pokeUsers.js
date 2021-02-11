import Axios from "axios";
import { types } from "./types";
import * as varss from '../redux/varss'
var CryptoJS = require("crypto-js");

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
      // console.log(action.payload)
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

  if (localStorage.getItem("usuario")) {
    var miStorage =localStorage.getItem("usuario");
    var bytes  = CryptoJS.AES.decrypt(miStorage.toString(), 'adanAloe99');
    var texto = bytes.toString(CryptoJS.enc.Utf8);

    var usuarioLogueado = JSON.parse(texto);
  //  console.log(usuarioLogueado)
    dispatch({
      type: types.login,
      isAuthenticated: true,
      payload: usuarioLogueado,
      logged: true,
    });

  }else{
  
  const uri = varss.uri
  try {
    const res = await Axios.get(uri + `busca_profe.php?id=${dni}`)
  
  
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(res.data[0]).toString(), 'adanAloe99');
    // console.log("texto encriptado", ciphertext.toString());

    // var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'adanAloe99');
    // var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    // // console.log("Texto Desencriptado ", plaintext);
  
    // console.log('los datos son: ',res.data)
    if (res.data.dni==='11222333'){
      localStorage.clear();
      dispatch({
        type: types.logout,
        isAuthenticated: false,
        payload: res.data,
      });
    }else{
      dispatch({
        type: types.login,
        isAuthenticated: true,
        payload: res.data[0],
      });
      
    }
    localStorage.setItem("usuario", ciphertext)
    // localStorage.setItem("logged", true)

  } catch (error) {
    console.log(error);
  }
    }
};
