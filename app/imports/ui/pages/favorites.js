import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Favorites } from '/imports/api/favorites/database.js';

Template.Favorites_Page.onCreated(function onCreated() {
  this.subscribe('Favorites');
});

Template.Favorites_Page.helpers({
  list() {
    return Favorites.find();
  },
});

Template.Favorites_Page.events({
  'click .remove'() {
    Favorites.remove(FlowRouter.getParam('_id'));
    FlowRouter.go('Favorites_Page');
  },
});
