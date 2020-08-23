import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddelware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './rootSaga';

export default function configureStore() {
  const sagaMiddelware = createSagaMiddelware();

  const reduxMiddelware = [logger, sagaMiddelware];

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...reduxMiddelware)),
  );

  sagaMiddelware.run(rootSaga);

  return store;
}
