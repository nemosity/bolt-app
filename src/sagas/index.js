import { call, put, takeEvery, all } from 'redux-saga/effects';
import AuthService from '../api/AuthService';
import StoreService from '../api/StoreService';
import {
  LOGIN_REQUEST,
  LOGIN_AUTO_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT,
  STORES_REQUEST,
  STORES_RESPONSE,
  SELECT_ITEM,
  ADD_ITEM,
} from '../actions';
import { navigate } from '../navigation/utils';

// Authentication sagas

function* login(action) {
  try {
    const userData = yield call(AuthService.login, action.payload);
    yield put({ type: LOGIN_RESPONSE, payload: userData });
  } catch (e) {
    console.log(e);
    yield put({ type: LOGIN_RESPONSE, payload: null, error: true });
  }
}

function* watchLogin() {
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

function* watchAutoLogin() {
  yield takeEvery(LOGIN_AUTO_REQUEST, autoLogin);
}

function* logout() {
  yield call(AuthService.deauthenticateUser);
}

function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}

// Stores sagas

function* loadStores() {
  try {
    const stores = yield call(StoreService.getStores);
    if (stores) {
      yield put({ type: STORES_RESPONSE, payload: { stores }, error: false });
    }
  } catch {
    yield put({ type: STORES_RESPONSE, payload: null, error: true });
  }
}

function* watchLoadStores() {
  yield takeEvery(STORES_REQUEST, loadStores);
}

// Navigation sagas

function* navigateToBuilderScreen() {
  // Navigate to builder screen to customise item
  navigate('Builder');
}

function* watchSelectItem() {
  yield takeEvery(SELECT_ITEM, navigateToBuilderScreen);
}

function* navigateToStoreScreen() {
  // Navigate back to store after adding item
  navigate('StoreDetail');
}

function* watchAddItem() {
  yield takeEvery(ADD_ITEM, navigateToStoreScreen);
}

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchAutoLogin(),
    watchLogout(),
    watchLoadStores(),
    watchSelectItem(),
    watchAddItem(),
  ]);
}
