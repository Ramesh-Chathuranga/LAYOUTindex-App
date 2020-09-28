import React from 'react';
import _ from 'lodash';
import {AllHandlers} from '../modules/Handlers';
import {Actions} from '../modules/Actions';
import {createLogger} from '../AppUitils';
import {NetworkError} from '../models/index';

const logger = createLogger('[Action]');

/**
 * bind the handlers
 */
export const actionMiddleware = (args) => {
  return ({dispatch, getState}) => (next) => (action) => {
    const handlers = AllHandlers[action.type];
    const {payload: data, error, type} = action;

    if (error) {
      if (data instanceof NetworkError) {
        dispatch(Actions.common.networkError(action));
      } else {
        if (error.code) {
        } else {
        }
      }
    }

    const nextResult = next(action);

    _.forEach(handlers, (handler) => {
      handler({dispatch, payload: action.payload, appState: getState(), error});
    });

    return nextResult;
    //return next(action);
  };
};

export default actionMiddleware;
