import ModuleSet from './AppModules';
import _ from 'lodash';
// TODO:  metro bundler dynamic issue
const actionModule = {
  home: require(`../../module/home/Actions`),
};

export const Actions = _(ModuleSet)
  .keyBy((module) => module)
  .mapValues((module) => {
    return actionModule[module];
  })
  .mapValues((module) => module.default)
  .value();

export default Actions;
