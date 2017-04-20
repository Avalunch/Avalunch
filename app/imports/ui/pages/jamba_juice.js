
import { Template } from 'meteor/templating';
export const entre = [
{
  name: 'Personal Pizza',
  price: '$4.00',

},
{
  name: 'Philly Cheese Steak',
  price: '$4.00',
},
{
  name: 'Stuffed Cheesy Bread',
  price: '$4.00',
},
]
export const drinks = [
{
  name: 'Personal Pizza',
  price: '$4.00',

},
]
export const deserts = [
{
  name: 'Personal Pizza',
  price: '$4.00',

},
]
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
    return entre;
  },
  drinks() {
    return entre;
  },
  drinks() {
    return entre;
  },
});

$('.menu-button').click(function() {
  $('nav').toggleClass('active');
});