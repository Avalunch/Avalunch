import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '../../api/users/users.js';


Template.Home_Page.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
});

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Users documents.
   */
  current() {
    console.log(FlowRouter.getParam('profile'));
    return 'fun'; //Users.findDoc(FlowRouter.getParam('profile'));
  },
});

