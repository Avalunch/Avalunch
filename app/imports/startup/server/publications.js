/**
 * Created by Xla on 3/13/17.
 */
import { Users } from '../../api/users/users.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Users', function publishUsersData() {
  return Users.find();
});

