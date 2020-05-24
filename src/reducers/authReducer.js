import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from '../actions';

const initialAuthState = {
  isAuthenticating: false,
  error: null,
};

// reducer function for auth
export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialAuthState,
      };
    case LOGIN_REQUEST:
      return { ...state, isAuthenticating: true };
    case LOGIN_RESPONSE:
      return {
        ...state,
        ...action.payload,
        error: action.error,
        isAuthenticating: false,
      };
    default:
      return state;
  }
}
