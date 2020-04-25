import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reducer } from './reducer';
import mySaga from './saga';

const SagaMiddleware = createSagaMiddleware();
const middlewares = [logger, SagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middlewares));
SagaMiddleware.run(mySaga);
export default store;
