import { call, put, takeEvery } from 'redux-saga/effects';
import AuthService from '../api/AuthService';
import {
  LOGIN_REQUEST,
  LOGIN_AUTO_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT,
} from '../actions';

function* login(action) {
  try {
    const userData = yield call(AuthService.login, action.payload);
    yield put({ type: LOGIN_RESPONSE, payload: userData });
  } catch (e) {
    console.log(e);
    yield put({ type: LOGIN_RESPONSE, payload: null, error: true });
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

function* autoLogin() {
  try {
    const isLoggedIn = yield call(AuthService.isUserAuthenticated);
    if (isLoggedIn) {
      const userData = yield call(AuthService.getUserData);
      yield put({ type: LOGIN_RESPONSE, payload: userData });
    }
  } catch {
    yield put({ type: LOGIN_RESPONSE, payload: null, error: true });
  }
}

export function* watchAutoLogin() {
  yield takeEvery(LOGIN_AUTO_REQUEST, autoLogin);
}

function* logout() {
  yield call(AuthService.deauthenticateUser);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}
