import { Template } from 'meteor/templating';
import { Favorites } from '/imports/api/favorites/database.js';

Template.Restaurant.onCreated(function onCreated() {
  this.subscribe('Favorites');
});

Template.Restaurant.events({
  'click .favorite'() {
    $('.favorite').click(function () {
      const name = $(this).attr('name');
      const icon = $(this).attr('icon');
      const info = $(this).attr('info');
      const price = $(this).attr('price');
      const data = { name, icon, info, price };
      Favorites.insert(data);
    });
  },
});
