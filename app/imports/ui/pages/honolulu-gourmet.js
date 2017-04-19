import { Template } from 'meteor/templating';

export const menu = [
  {
    name: 'Tuna Melt Panini',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
  {
    name: 'Salad of the Day',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
  {
    name: 'Pasta Salad',
    icon: 'images/meteor-logo.png',
    price: '$4.00',
  },
];

Template.Honolulu_Gourmet_Page.helpers({
  menu() {
    return menu;
  },
});
