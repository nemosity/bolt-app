import { call, put, takeEvery, all } from 'redux-saga/effects';
import AuthService from '../api/AuthService';
import StoreService from '../api/StoreService';
import {
  LOGIN_REQUEST,
  LOGIN_AUTO_REQUEST,
  LOGIN_RESPONSE,
  STORES_REQUEST,
  STORES_RESPONSE,
} from '../actions';
import { navigate } from '../navigation';

function* doLogin(action) {
  try {
    const userData = yield call(AuthService.login, action.payload);
    yield put({ type: LOGIN_RESPONSE, payload: userData });
  } catch {
    yield put({ type: LOGIN_RESPONSE, payload: null, error: true });
  }
  navigate('Home');
}

function* doAutoLogin() {
  try {
    const isLoggedIn = yield call(AuthService.isUserAuthenticated);
    if (isLoggedIn) {
      navigate('Home');
    }
  } catch {
    yield put({ type: LOGIN_RESPONSE, payload: null, error: true });
  }
}

function* doStoresRequest() {
  try {
    const stores = yield call(StoreService.getStores);
    if (stores) {
      yield put({ type: STORES_RESPONSE, payload: { stores }, error: false });
    }
  } catch {
    yield put({ type: STORES_RESPONSE, payload: null, error: true });
  }
}

function* loginAsync() {
  yield takeEvery(LOGIN_REQUEST, doLogin);
}

function* loginAutoAsync() {
  yield takeEvery(LOGIN_AUTO_REQUEST, doAutoLogin);
}

function* storesRequest() {
  yield takeEvery(STORES_REQUEST, doStoresRequest);
}

export default function* rootSaga() {
  yield all([loginAsync(), loginAutoAsync(), storesRequest()]);
}
