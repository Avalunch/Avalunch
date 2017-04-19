import { Template } from 'meteor/templating';

export const menu = [
  {
    name: 'Personal Pizza',
    icon: 'images/meteor-logo.png',
    info: 'Choose: Cheese, Pepperoni, or Deluxe',
    price: '$4.00',
  },
  {
    name: 'Philly Cheese Steak',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
  {
    name: 'Stuffed Cheesy Bread',
    icon: 'images/meteor-logo.png',
    info: 'Cheese, Bacon & Jalapeno, or Spinach & Feta',
    price: '$4.00',
  },
];

Template.Domino_Page.helpers({
  menu() {
    return menu;
  },
});
