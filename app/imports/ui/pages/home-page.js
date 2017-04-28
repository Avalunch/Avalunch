import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '../../api/users/users.js';
import { Menu } from '../../api/menu/menu.js';


Template.Home_Page.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
  this.subscribe('Menu');
});

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Users documents.
   */
  current() {
    console.log(Users.findDoc(Meteor.user().profile.name));
    return 'fun'; //Users.findDoc(FlowRouter.getParam('profile'));
  },
  /**
   * @returns {*} All of the Contacts documents.
   */
  menuList() {
    return Menu.find();
  },
});

