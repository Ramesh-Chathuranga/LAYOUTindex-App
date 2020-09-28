import Repository from './Repository';

class UserRepository extends Repository {
  getAUser = async (id) => {
    return await this.getDoc(id);
  };

  getUserList = async () => {
    return await this.getAllDocs();
  };
}

export default new UserRepository('users');
