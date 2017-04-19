/* eslint-disable max-len */
import { Template } from 'meteor/templating';

export const menu = [
  {
    name: 'Classic Burger',
    icon: 'images/meteor-logo.png',
    info: 'American Style: Tasty Original Garden Patty, with pickles, original ketchup,creamy mustard sauce, coconut mayo',
    price: '$4.00',
  },
  {
    name: 'Gaia Plate',
    icon: 'images/meteor-logo.png',
    info: 'Super healthy and lite brown rice, scramble tofu, hijiki seawee, avocado, marinated beet & carrot, organic romaine, kale, coconuts chips w/ dressing',
    price: '$4.00',
  },
  {
    name: 'Organic Home Style Potat',
    icon: 'images/meteor-logo.png',
    info: 'Home-style organic potatoes with our original seasoning',
    price: '$4.00',
  },
];

Template.Green_Garden_Page.helpers({
  menu() {
    return menu;
  },
});
