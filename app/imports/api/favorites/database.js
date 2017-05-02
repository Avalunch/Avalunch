import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Favorites = new Mongo.Collection('Favorites');

export const Schema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 20,
  },
  info: {
    label: 'info',
    type: String,
    optional: false,
    max: 100,
  },
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 40,
  },
});

Favorites.attachSchema(Schema);
