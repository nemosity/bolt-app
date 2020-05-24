import { SELECT_ITEM, SELECT_VARIATION, LOGOUT } from '../actions';

const initialState = {
  selectedItem: null,
  items: {},
};

// reducer function for stores
export default function builderReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialState,
      };
    case SELECT_ITEM:
      return { ...state, ...action.payload };
    case SELECT_VARIATION:
      return {
        ...state,
        ...{
          items: {
            ...state.items,
            [action.payload.itemID]: {
              ...state.items[action.payload.itemID],
              ...action.payload.selection,
            },
          },
        },
      };
    default:
      return state;
  }
}
