import { Template } from 'meteor/templating';
import { Favorites } from '/imports/api/favorites/database.js';

const sample = [
  {
    name: 'Eggplant Parmesan',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
  {
    name: 'Thai Red Vegetable Curry',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
  {
    name: 'Vege Parmesan',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
];

Template.Favorites_Page.onCreated(function onCreated() {
  this.subscribe('Favorites');
});

Template.Favorites_Page.helpers({
  list() {
    return Favorites.find();
  },
});
