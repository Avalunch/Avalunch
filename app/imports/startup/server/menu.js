/**
 * Created by clark on 4/14/17.
 * This is the Menu Collection that will used for queries.
 */
import { Menu } from '../../api/menu/menu.js';
import { _ } from 'meteor/underscore';

const menuSeeds = [
  {
    item: '6-in Meatball Sub',
    restaurant: 'Subway',
    price: '5.99',
    tags: 'cheap,',
  },
];


if (Menu.find().count() === 0) {
  _.each(menuSeeds, function seedMenus(stuff) {
    Menu.insert(stuff);
  });
}
