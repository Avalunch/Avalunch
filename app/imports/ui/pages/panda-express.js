import { Template } from 'meteor/templating';

export const menu = [
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

Template.Panda_Express_Page.helpers({
  menu() {
    return menu;
  },
});