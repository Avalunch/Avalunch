import { Template } from 'meteor/templating';
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
  'click .remove'(event, instance) {
    $('.remove').click(function () {
      Favorites.remove($(this).getAttribute('id').html());
      console.log($(this).getAttribute('id').html());
    });
  },
});

$('.remove').click(function () {
  Favorites.remove($(this).getAttribute('id'));
  console.log($(this).getAttribute('id'));
});