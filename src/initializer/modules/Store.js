import React from 'react';
import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import Reducers from './Reducers';
import actionMiddleware from '../middleware/ActionMiddleware';
import promiseMiddleware from '../middleware/PromiseMiddleware';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  ...Reducers,
});

const enhancer = compose(
  applyMiddleware(promiseMiddleware, logger, actionMiddleware()),
);

export const store = createStore(rootReducer, {}, enhancer);

export default store;
