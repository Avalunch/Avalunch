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

export const info = 'Da Spot Health Foods & Juices offers diverse, healthy and affordable cuisine with a unique take ' +
    'on tasty dishes from around the world.';

Template.Da_Spot_Page.helpers({
  info() {
    return info;
  },
  menu() {
    return menu;
  },
});
