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

const displayErrorMessages = 'displayErrorMessages';

Template.Edit_Profile.onCreated(function onCreated() {
  this.subscribe('Users');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = UsersSchema.namedContext('Edit_Profile');
});

Template.Edit_Profile.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
  /**
   * @returns {*} All of the Users documents.
   */
  usersList() {
    return Users.find();
  },
  currentUser: function currentUser() {
    const name = 'default';
    const current = (Users.findOne(name) || Users.findOne({ name }) || Users.findOne({ profile: name }));
    return current;
  },
  usersDataField(fieldName) {
    const usersData = Users.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return usersData && usersData[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});

