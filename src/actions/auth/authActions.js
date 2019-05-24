import {
  LOGIN
} from "./authActionTypes";


/**
 * 
 * sample action _login
 * 
 * _login action will dispatch action with type LOGIN
 * it is asynchronous. so it will return after 3000s
 *  
 */
export const _login = (obj) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOGIN,
        credentials: obj
      })
    }, 3000)
  }
};
