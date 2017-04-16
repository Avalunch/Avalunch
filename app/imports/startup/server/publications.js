/**
 * Created by Xla on 3/13/17.
 */
import { Contacts } from '../../api/contacts/contacts.js';
import { Menu } from '../../api/menu/menu.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Contacts', function publishContactsData() {
  return Contacts.find();
});

Meteor.publish('Menu', function publishMenuData() {
  return Menu.find();
});
