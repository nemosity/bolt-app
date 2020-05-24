import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  INITIALIZE_CART,
  SELECT_STORE,
  LOGOUT,
} from '../actions';

const initialState = {
  storeId: '',
  items: [],
};

// reducer function for stores
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialState,
      };
    case SELECT_STORE:
      return {
        ...initialState,
        storeId: action.payload.selectedStore,
      };
    // not used yet
    case INITIALIZE_CART:
      return {
        ...initialState,
        storeId: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM: {
      const index = state.items.findIndex(
        ({ itemId }) => itemId === action.payload.itemId,
      );
      const newItems = [...state.items];
      newItems[index] = action.payload.item;
      return {
        ...state,
        items: newItems,
      };
    }
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(({ itemId }) => itemId !== action.payload),
      };
    default:
      return state;
  }
}
