import StoreService from '../api/StoreService';
import { SELECT_ITEM, SELECT_VARIATION } from '../actions';
import { navConfirmOrderScreen } from './navActions';

export const selectItem = (itemID) => ({
  type: SELECT_ITEM,
  payload: {
    selectedItem: itemID,
  },
});

const chooseVariation = (variationID, optionID, itemID) => ({
  type: SELECT_VARIATION,
  payload: {
    itemID,
    selection: {
      [optionID]: variationID,
    },
  },
});

// TODO implement cart functionality
const updateCart = (variationID, optionID, itemID) => ({
  type: SELECT_VARIATION,
  payload: {
    itemID,
    selection: {
      [optionID]: variationID,
    },
  },
});

export const viewItem = (itemID) => (dispatch) => {
  return dispatch(selectItem(itemID));
};

export const prepareForPayment = (storeID, itemID, options) => (dispatch) => {
  // TODO state update and error handling
  const mappedOptions = [];
  Object.keys(options).forEach((key) =>
    mappedOptions.push({ option: key, variation: options[key] }),
  );
  StoreService.placePreflightOrder(storeID, itemID, mappedOptions)
    .catch((err) => console.log(err))
    .then(dispatch(navConfirmOrderScreen()));
};

export const selectVariation = (variationID, optionID, itemID) => ({
  type: SELECT_VARIATION,
  payload: {
    itemID,
    selection: {
      [optionID]: variationID,
    },
  },
});
