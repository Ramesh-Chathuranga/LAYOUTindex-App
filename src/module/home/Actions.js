import {createAction} from '../../initializer/AppUitils';
import UserRepository from '../../initializer/repositories/UserRepository';

export const ModuleEvents = {
  GET_ALL_USERS: 'GET_ALL_USERS',
  GET_SELECTED_USER: 'GET_SELECTED_USER',
};

export default {
  getAllUserList: createAction(ModuleEvents.GET_ALL_USERS, async () => {
    return await UserRepository.getUserList();
  }),
  getSelectedUser: createAction(ModuleEvents.GET_SELECTED_USER, async (id) => {
    const user = await UserRepository.getAUser(id);

    if (user && !user.error) {
      return {id, user};
    } else {
      return {id};
    }
  }),
};
