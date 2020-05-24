import { combineReducers } from 'redux';
import authReducer from './authReducer';
import builderReducer from './builderReducer';
import storeReducer from './storeReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  builder: builderReducer,
  stores: storeReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default rootReducer;
