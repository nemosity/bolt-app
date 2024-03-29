import { takeEvery } from 'redux-saga/effects';
import { SELECT_ITEM, ADD_ITEM, VIEW_CART } from '../actions';
import { navigate } from '../navigation/utils';

function* navigateToBuilderScreen() {
  // Navigate to builder screen to customise item
  navigate('Builder');
}

export function* watchSelectItem() {
  yield takeEvery(SELECT_ITEM, navigateToBuilderScreen);
}

function* navigateToStoreScreen() {
  // Navigate back to store after adding item
  navigate('StoreDetail');
}

export function* watchAddItem() {
  yield takeEvery(ADD_ITEM, navigateToStoreScreen);
}

function* navigateToCartScreen() {
  // Navigate back to store after adding item
  navigate('Confirm');
}

export function* watchViewCart() {
  yield takeEvery(VIEW_CART, navigateToCartScreen);
}
