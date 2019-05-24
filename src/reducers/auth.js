import {
  LOGIN
} from "../actions/auth/authActionTypes";

/**
 * 
 * auth reducer
 * 
 * manipulate store state according to action type 
 * 
 */
export default function(state = {}, action) {
  switch (action.type) {

    case LOGIN:
      return { credentials: action.credentials };

    default:
      return state;
  }
}
