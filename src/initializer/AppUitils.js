import _ from 'lodash';

const createAction = (type, action = (any) => {}, meta) => {
  return (...args) => ({type, payload: action.apply(null, args), meta});
};

const Logger = (module, file) => ({
  log: (...args) => {},
  warn: (...args) => {},
  error: (...args) => {},
});

const createLogger = (module = 'default', level = 'debug') => ({
  log: (...args) => {
    // getLogger.log([`${module}`, ...args].join(' '));
  },
  info: (...args) => {
    // getLogger.info([`${module}`, ...args].join(' '));
  },
  warn: (...args) => {
    // getLogger.warn([`${module}`, ...args].join(' '));
  },
  error: (...args) => {
    // getLogger.error([`${module}`, ...args].join(' '));
  },
});

export {_, createAction, createLogger, Logger};
