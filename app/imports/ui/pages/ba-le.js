import { Template } from 'meteor/templating';
export const entre = [
  {
    name: 'Eggplant Parmesan',
    price: '$6.00',
  },
  {
    name: 'Fried Rice with Shrimp',
    price: '$6.00',
  },
  {
    name: 'Side Order Spring Rolls',
    price: '$6.00',
  },

  ]

export const menu = [
  {
    name: 'Eggplant Parmesan',
    icon: 'http://www.balemaui.com/images/624_1.jpg',
    price: '$6.00',
  },
  {
    name: 'Fried Rice with Shrimp',
    icon: 'http://www.balemaui.com/images/624_13.jpg',
    price: '$7.50',
  },
  {
    name: 'Side Order Spring Rolls',
    icon: 'http://www.balemaui.com/images/624_SO.jpg',
    price: '$4.00',
  },
];

Template.Ba_Le_Page.helpers({
  menu() {
    return menu;
  },
  entre() {
    return entre;
  },
  drinks() {
    return drinks;
  },
  deserts() {
    return deserts;
  }
});
$('.menu-button').click(function() {
  $('nav').toggleClass('active');
});