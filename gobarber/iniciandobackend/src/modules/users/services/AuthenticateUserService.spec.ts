
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakesUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakesHashProvider';
import AuthenticateService from './AuthenticateUserService';
import CreateUsersService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new AuthenticateService(
      fakeUsersRepository,fakeHashProvider
    );

    const user = await createUser.execute({
      name: 'John Does',
      email: 'johndoe@example.com',
      password: '123456',
    });



    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const authenticateUser = new AuthenticateService(
      fakeUsersRepository,fakeHashProvider
    );

    expect(authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    })).rejects.toBeInstanceOf(AppError);
  });


  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new AuthenticateService(
      fakeUsersRepository,fakeHashProvider
    );

 await createUser.execute({
      name: 'John Does',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(authenticateUser.execute({
      email: 'johndoe@example.com',
      password: 'dashudhuuuuu',
    })).rejects.toBeInstanceOf(AppError);

  });





});
