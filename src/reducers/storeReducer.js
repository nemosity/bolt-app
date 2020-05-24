import {
  STORES_REQUEST,
  STORES_RESPONSE,
  SELECT_STORE,
  LOGOUT,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  stores: null,
  selectedStore: null,
};

// reducer function for stores
export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialState,
      };
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
