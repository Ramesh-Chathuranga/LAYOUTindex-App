import React from 'react';
var _ = require('lodash');
import ModuleSet from './AppModules';

// TODO:  metro bundler dynamic issue
const handlerModule = {
  home: require(`../../module/home/Handler`),
};

export const Handlers = _(ModuleSet)
  .keyBy((module) => module)
  .mapValues((module) => {
    try {
      // eslint-disable-next-line global-require
      const moduleHandler = handlerModule[module];
      return moduleHandler.default;
    } catch (e) {
      // console.warn('ok', e);
      return {default: {}};
    }
  })
  .value();
const EventHandlers = new Map();
export const AllHandlers = _(Handlers)
  .transform((result, handler) => {
    _.mapKeys(handler, (fn, key) => {
      if (key === 'default') {
        return;
      }
      result[key] = result[key] ? _.concat(result[key], fn) : [fn];
    });
    return result;
  }, {})
  .value();
export default Handlers;
