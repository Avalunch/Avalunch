import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Users } from '/imports/api/users/users.js';
import { _ } from 'meteor/underscore';

/* eslint-disable no-console */

/* When running app for first time, pass a settings file to set up a default user account. */
  /* if (Meteor.users.find().count() === 0) {
  if (!!Meteor.settings.defaultAccount) {
    Accounts.createUser({
      username: Meteor.settings.defaultAccount.username,
      password: Meteor.settings.defaultAccount.password,
    });
  } else {
    console.log('No default user!  Please invoke meteor with a settings file.');
  }
} */

/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  if (user) {
    const profile = user.services.cas.id;
    if (!Users.isDefined(profile)) {
      Users.define({ profile });
      console.log('creating new user');
    }
  }
  return true;
});


if (!Meteor.settings.cas) {
  console.log('CAS settings not found! Hint: "meteor --settings ../config/settings.development.json"');
}
