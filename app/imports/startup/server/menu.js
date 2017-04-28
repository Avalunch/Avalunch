/**
 * Created by clark on 4/14/17.
 * This is the Menu Collection that will used for queries.
 */
import { Menu } from '../../api/menu/menu.js';
import { _ } from 'meteor/underscore';

const menuSeeds = [
  {
    group: 'campus-center',
    restaurant: 'Subway',
    item: '6-in Meatball Sub',
    type: 'entre',
    tag: 'american',
    price: '5.99',
    spicy: false,
    vegetarian: false,
    vegan: false,
  },
];


if (Menu.find().count() === 0) {
  _.each(menuSeeds, function seedMenus(stuff) {
    Menu.insert(stuff);
  });
}
