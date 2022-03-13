import axios from 'axios';
import { User, UserProps } from './models/User';

// const user = User.buildUser({ id: 2 });
// user.on('change', () => {
//   console.log(user);
// });

import { Collection } from './models/Collection';
const collection = User.buildUserCollection();
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
