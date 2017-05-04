import { Template } from 'meteor/templating';

export const menu = [
  {
    name: 'Aloha Pineapple Smoothie',
    icon: 'http://www.jambajuice.com/~/media/www/images/products/product/smoothies/classic-smoothies/aloha-pineapple-prod.ashx',
    info: 'Blend of: Pineapple Juice, Strawberries, Pineapple Sherbet (Contains Milk), Ice, Bananas, Greek Yogurt (Contains Milk)',
    price: 'Small:$5.50, Med:$6.00, Large:$7.50',
  },
  {
    name: 'Banana Berry™ Smoothie',
    icon: 'http://www.jambajuice.com/~/media/www/images/products/product/smoothies/classic-smoothies/banana-berry-prod.ashx',
    info: 'Blend of: Apple-Strawberry Juice Blend, Bananas, Nonfat Frozen Yogurt (Contains Milk), Blueberries, Ice, Raspberry Sherbet (Contains Milk)',
    price: 'Small:$5.50, Med:$6.00, Large:$7.50',
  },
  {
    name: 'Caribbean Passion Smoothie',
    icon: 'http://www.jambajuice.com/~/media/www/images/products/product/smoothies/classic-smoothies/carribean-passion-prod.ashx',
    info: 'Blend of: Passion Fruit-Mango Juice Blend, Strawberries, Orange Sherbet (Contains Milk), Ice, Peaches)',
    price: 'Small:$5.50, Med:$6.00, Large:$7.50',
  },
];


Template.Da_Spot_Page.helpers({
  menu() {
    return menu;
  },
});

Template.Da_Spot_Page.events({});

$('.menu-button').click(function () {
  $('nav').toggleClass('active');
});
