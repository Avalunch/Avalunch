/**
 * Created by Xla on 3/13/17.
 */
import { Menu } from '../../api/menu/menu.js';
import { Meteor } from 'meteor/meteor';


Meteor.publish('Menu', function publishMenuData() {
  return Menu.find();
});
