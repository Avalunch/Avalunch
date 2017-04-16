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
  item: {
    label: 'item',
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
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 200,

  },
  tags: {
    label: 'tags',
    type: String,
    optional: false,
    max: 200,

  },

});

Menu.attachSchema(MenuSchema);
