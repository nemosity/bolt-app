import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_RESPONSE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_RESPONSE,
  LOGOUT,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  orders: [],
  selectedOrder: null,
  newOrder: null,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialState,
      };
    case GET_ORDERS_REQUEST:
      return { ...state, isFetching: true };
    case GET_ORDERS_RESPONSE:
      return {
        ...state,
        ...action.payload,
        error: action.error,
        isFetching: false,
      };
    case CREATE_ORDER_REQUEST:
      return { ...state, isFetching: true };
    case CREATE_ORDER_RESPONSE:
      return {
        ...state,
        newOrder: action.payload,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
}
