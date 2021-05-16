import { all } from 'redux-saga/effects';
import { watchLogin, watchAutoLogin, watchLogout } from './auth';
import { watchLoadStores } from './stores';
import { watchSelectItem, watchAddItem } from './navigation';

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
