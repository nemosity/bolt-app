import { combineReducers } from 'redux';
import authReducer from './authReducer';
import builderReducer from './builderReducer';
import storeReducer from './storeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  builder: builderReducer,
  stores: storeReducer,
});

export default rootReducer;
