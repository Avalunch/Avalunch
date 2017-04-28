/**
 * Created by clark on 4/26/17.
 * JS Loader for Profile integration.
 */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Users, UsersSchema } from '../../api/users/users.js';

/* eslint-disable object-shorthand */


Template.Edit_Profile.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
  this.context = UsersSchema.namedContext('Edit_Profile');
});

Template.Edit_Profile.helpers({
  current() {
    return Users.findDoc(Meteor.user().profile.name);
  },
});

