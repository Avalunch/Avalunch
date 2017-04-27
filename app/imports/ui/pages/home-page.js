import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Users documents.
   */
  usersList() {
    return Users.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Users');
});
