import { createAction } from 'redux-actions';
import AuthService from '../api/AuthService';
import { LOGIN_REQUEST, LOGIN_AUTO_REQUEST, LOGIN_RESPONSE } from '../actions';
import { navHomeScreen } from './navActions';

// TODO: Migrate to redux actions

export const loginRequest = createAction(LOGIN_REQUEST);

export const loginSuccess = createAction(LOGIN_RESPONSE, (userData) => ({
  name: userData.user.name,
  email: userData.user.email,
  token: userData.token,
  image: userData.user.image,
}));

export const loginFailure = (err) => ({
  type: LOGIN_RESPONSE,
  payload: err,
  error: true,
});

export const autoLoginFailure = () => ({
  type: LOGIN_RESPONSE,
  payload: null,
  error: false,
});

export const logout = () => (dispatch) =>
  AuthService.deauthenticateUser().finally(() => {
    dispatch({
      type: 'USER_LOGOUT',
    });
  });

// export const login = (creds) => (dispatch) => {
//   dispatch(loginRequest());
//   return AuthService.login(creds)
//     .then((userData) => {
//       dispatch(loginSuccess(userData));
//       return dispatch(navHomeScreen());
//     })
//     .catch((err) => dispatch(loginFailure(err)));
// };

// export const autoLogin = () => (dispatch) => {
//   dispatch(loginRequest());
//   return AuthService.getUserData()
//     .then((userData) => {
//       dispatch(loginSuccess(userData));
//       return dispatch(navHomeScreen());
//     })
//     .catch(() => dispatch(autoLoginFailure()));
// };

export const login = (payload) => ({
  type: LOGIN_REQUEST,
  payload: payload,
});

export const autoLogin = () => ({
  type: LOGIN_AUTO_REQUEST,
});
