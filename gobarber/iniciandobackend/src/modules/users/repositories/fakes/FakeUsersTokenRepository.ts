import { uuid } from 'uuidv4';

import IUserTokenRepository from '@modules/users/repositories/IUsersRepository';


import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokensRepository implements IUserTokenRepository {
  private users: User[] = [];

  public async generate(user_id: string): Promise<UserToken> {

    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

}
export default FakeUserTokensRepository;
