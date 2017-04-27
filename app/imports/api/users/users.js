/**
 * Created by clark on 4/14/17.
 * Menu setup for Users Collection.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Users = new Mongo.Collection('Users');

/**
 * Create the schema for Users
 */
export const UsersSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 25,

  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 25,

  },
  bio: {
    label: 'bio',
    type: String,
    optional: false,
    max: 150,

  },
  twitter: {
    label: 'twitter',
    type: String,
    optional: false,
    max: 25,

  },
  spicy: {
    label: 'spicy',
    type: Boolean,
    optional: true,

  },
  vegetarian: {
    label: 'vegetarian',
    type: Boolean,
    optional: true,

  },
  vegan: {
    label: 'vegan',
    type: Boolean,
    optional: true,

  },
  cheap: {
    label: 'cheap',
    type: Number,
    optional: true,
    min: 1,
    max: 25,
  },
});

Users.attachSchema(UsersSchema);
