import React from 'react';
import {Actions} from '../../initializer/modules/Actions';
import {ModuleEvents} from './Actions';
import {navigate} from '../../initializer/repositories/Repository';

export default {
  [ModuleEvents.GET_ALL_USERS]: ({dispatch, payload, appState}) => {
    if (payload && !payload.error) {
      // exisitng user
      // console.log(payload);
      // navigate('HomeScreen', {});
      // //dispatch(Actions.user.fetchCurrentUser(payload.uid));
    }
  },
};
