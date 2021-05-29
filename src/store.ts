import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
