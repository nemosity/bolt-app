import StoreService from '../api/StoreService';
import { STORES_REQUEST, STORES_RESPONSE, SELECT_STORE } from '../actions';
import { navStoreScreen } from './navActions';

export const storesRequest = () => ({
  type: STORES_REQUEST,
});

export const storesSuccess = stores => ({
  type: STORES_RESPONSE,
  payload: {
    stores,
  },
});

export const storesFailure = err => ({
  type: STORES_RESPONSE,
  payload: err,
  error: true,
});

export const selectStore = storeID => ({
  type: SELECT_STORE,
  payload: {
    selectedStore: storeID,
  },
});

export const loadStores = () => dispatch => {
  dispatch(storesRequest());
  return StoreService.getStores()
    .then(stores => dispatch(storesSuccess(stores)))
    .catch(err => dispatch(storesFailure(err)));
};

export const viewStore = storeID => dispatch => {
  dispatch(selectStore(storeID));
  return dispatch(navStoreScreen());
};
