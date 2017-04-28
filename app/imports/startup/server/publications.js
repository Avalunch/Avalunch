/**
 * Created by Xla on 3/13/17.
 */
import { Users } from '../../api/users/users.js';
import { Menu } from '../../api/menu/menu.js';
import { Meteor } from 'meteor/meteor';

Users.publish();

Meteor.publish('Menu', function publishMenuData() {
  return Menu.find();
});
