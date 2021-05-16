import { call, put, takeEvery } from 'redux-saga/effects';
import StoreService from '../api/StoreService';
import { STORES_REQUEST, STORES_RESPONSE } from '../actions';

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

export function* watchLoadStores() {
  yield takeEvery(STORES_REQUEST, loadStores);
}
