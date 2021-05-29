import { createAction } from 'redux-actions';
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, VIEW_CART } from '../actions';

export const addItem = createAction(ADD_ITEM);
export const updateItem = createAction(UPDATE_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const viewCart = createAction(VIEW_CART);
