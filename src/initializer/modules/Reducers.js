import React from 'react';
import ModuleSet from './AppModules';
import _ from 'lodash';

// metro bundler
const reducerModule = {
  home: require(`../../module/home/Reducer`),
};

const Reducers = _(ModuleSet)
  .keyBy((module) => module)
  .mapValues((module) => {
    return reducerModule[module];
  })
  .mapValues((module) => module.Reducer)
  .value();

export default Reducers;
