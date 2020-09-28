import { container } from 'tsyringe';

import IStorageProvider from './StorageProvide/models/IStorageProvider';
import DiskStorageProvider from './StorageProvide/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'storageProvider',
  DiskStorageProvider,
);
