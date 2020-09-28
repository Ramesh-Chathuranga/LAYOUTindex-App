import {Map} from 'immutable';
import _ from 'lodash';
import {ModuleEvents} from './Actions';

const InitialState = Map({
  userList: [],
  selectedUser: {},
});

export const Reducer = (state = InitialState, action) => {
  const {payload, type} = action;
  console.log(payload);
  switch (type) {
    case ModuleEvents.GET_ALL_USERS: {
      if (payload && !payload.error) {
        return state.set('userList', payload);
      }
      return state;
    }
    case ModuleEvents.GET_SELECTED_USER: {
      const {id, user} = payload;
      if (user) {
        return state.set('selectedUser', user);
      } else {
        const userList = state.get('userList');
        const findIndex = _.findIndex(userList, (item) => item.id === id);

        if (findIndex > -1) {
          return state.set('selectedUser', userList[findIndex]);
        }
        return state.set('selectedUser', {});
      }
    }
  }
  return state;
};
