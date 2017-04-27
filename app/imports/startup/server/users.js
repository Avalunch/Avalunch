import { Users } from '../../api/users/users.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Users to pre-fill the Collection.
 * @type {*[]}
 */
const usersSeeds = [
  {
    first: 'Firstname',
    last: 'Lastname',
    bio: 'Lorem Ipsum.',
    twitter: 'uhmanoa',
    spicy: false,
    vegetarian: false,
    vegan: false,
    cheap: 6,
  },
];

/**
 * Initialize the Users collection if empty with seed data.
 */
if (Users.find().count() === 0) {
  _.each(usersSeeds, function seedUsers(stuff) {
    Users.insert(stuff);
  });
}

