/**
 * Created by Xla on 3/13/17.
 */
import { Users } from '../../api/users/users.js';
import { Menu } from '../../api/menu/menu.js';
import { Favorites } from '../../api/favorites/database.js';
import { Meteor } from 'meteor/meteor';

Users.publish();

Meteor.publish('Menu', function publishMenuData() {
  return Menu.find();
});

Meteor.publish('Favorites', function publishMenuData() {
  return Favorites.find();
});
