import { createSelector } from 'reselect';
import _ from 'lodash';

export const storesSelector = state => state.stores.stores;
export const selectedStoreSelector = state => state.stores.selectedStore;
export const selectedItemSelector = state => state.builder.selectedItem;
export const itemsSelector = state => state.builder.items;

export const storeSelector = createSelector(
  storesSelector,
  selectedStoreSelector,
  (stores, selectedStore) => _.find(stores, ['_id', selectedStore]),
);

export const storeMenuSelector = createSelector(
  storeSelector,
  store => store.menu,
);

export const itemSelector = createSelector(
  storeMenuSelector,
  selectedItemSelector,
  (menu, item) => _.find(menu, ['_id', item]),
);

export const selectedItemVariationsSelector = createSelector(
  itemsSelector,
  selectedItemSelector,
  (items, selectedItem) => items[selectedItem],
);

export const itemTotalSelector = createSelector(
  itemSelector,
  selectedItemVariationsSelector,
  (item, variations) => {
    // TODO handle cases where selectors return undefined (underlying data non-existent)
    if (!item) {
      return null;
    }
    return item.options.reduce((accumulator, option) => {
      if (variations && variations[option._id]) { // eslint-disable-line no-underscore-dangle
        return accumulator + _.find(option.variations, ['_id', variations[option._id]]).price; // eslint-disable-line no-underscore-dangle
      }
      return accumulator;
    }, item.price);
  },
);

export const itemValidatorSelector = createSelector(
  itemSelector,
  selectedItemVariationsSelector,
  (item, variations) => {
    if (!item) {
      return null;
    }
    return item.options
    .reduce((accumulator, option) => !!(accumulator && variations && variations[option._id]), true); // eslint-disable-line no-underscore-dangle, max-len
  },
);
