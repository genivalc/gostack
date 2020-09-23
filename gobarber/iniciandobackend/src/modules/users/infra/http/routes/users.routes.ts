import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UserController from '../controllers/UsersController'
import UserAvatarController from '../controllers/UserAvatarController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const usersController = new UserController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);


usersRoutes.post('/',usersController.create);

usersRoutes.patch(
  '/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

export default usersRoutes;
