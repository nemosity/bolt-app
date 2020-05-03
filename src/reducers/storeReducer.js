import { STORES_REQUEST, STORES_RESPONSE, SELECT_STORE } from '../actions';

const initialStoreState = {
  isFetching: false,
  error: null,
  stores: null,
  selectedStore: null,
};

// reducer function for stores
export default function storeReducer(state = initialStoreState, action) {
  switch (action.type) {
    case STORES_REQUEST:
      return { ...state, isFetching: true };
    case STORES_RESPONSE:
      return {
        ...state,
        ...action.payload,
        error: action.error,
        isFetching: false,
      };
    case SELECT_STORE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
