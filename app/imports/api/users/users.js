/**
 * Created by clark on 4/14/17.
 * Users setup for Users Collection.
 */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/base';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

/* eslint-disable object-shorthand */

class UserCollection extends BaseCollection {

  constructor() {
    super('User', new SimpleSchema({
      profile: { type: String },
      // Remainder are optional
      first: { type: String, optional: true },
      last: { type: String, optional: true },
      bio: { type: String, optional: true },
      avatar: { type: SimpleSchema.RegEx.Url, optional: true },
      twitter: { type: SimpleSchema.RegEx.Url, optional: true },
      spicy: { type: Boolean, optional: true },
      vegetarian: { type: Boolean, optional: true },
      vegan: { type: Boolean, optional: true },
      price: { type: Number, optional: true },
    }));
  }

  define({ first = 'Tommy',
      last = 'Manoa',
      profile,
      bio = 'I\'m Tommy Manoa and UH is pretty cool. ',
      avatar = '/images/defaultUser.jpeg',
      twitter = 'https://twitter.com/uhmanoa',
      spicy = false,
      vegetarian = false,
      vegan = false,
      price = 10 }) {
    // make sure required fields are OK.
    const checkPattern = { first: String, last: String, profile: String, bio: String, avatar: String, twitter: String };
    check({ first, last, profile, bio, avatar, twitter }, checkPattern);

    if (this._collection.find({ profile }).count() > 0) {
      throw new Meteor.Error(`${profile} is previously defined in another Profile`);
    }

    return this._collection.insert({ first, last, profile, bio, avatar, twitter, spicy, vegetarian, vegan, price });
  }


}

export const Users = new UserCollection();
