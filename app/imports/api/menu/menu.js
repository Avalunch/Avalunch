/**
 * Created by clark on 4/14/17.
 * Menu setup for Menu Collection.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Menu = new Mongo.Collection('Menu');

/**
 * Create the schema for Contacts
 */
export const MenuSchema = new SimpleSchema({
  group: {
    label: 'group',
    type: String,
    optional: false,
    max: 200,
  },
  restaurant: {
    label: 'restaurant',
    type: String,
    optional: false,
    max: 200,
  },
  item: {
    label: 'item',
    type: String,
    optional: false,
    max: 200,

  },
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 200,

  },
  type: {
    label: 'type',
    type: String,
    optional: false,
    max: 200,
  },
  tag: {
    label: 'tag',
    type: String,
    optional: false,
    max: 200,
  },
  spicy: {
    label: 'spicy',
    type: Boolean,
    optional: false,
  },
  vegetarian: {
    label: 'vegetarian',
    type: Boolean,
    optional: false,
  },
  vegan: {
    label: 'vegan',
    type: Boolean,
    optional: false,
  },
});

Menu.attachSchema(MenuSchema);
