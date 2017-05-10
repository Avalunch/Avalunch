/**
 * Created by Xla on 4/17/17.
 * Edited by Unjammy.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/users.js';
<<<<<<< HEAD
import { FlowRouter } from 'meteor/kadira:flow-router';
=======

const displaySuccessMessage = 'displaySuccessMessage';
const displayErrorMessages = 'displayErrorMessages';

>>>>>>> m3-profile-finishup
$(function () {
  $('.right-menu a').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');


    var tab = $(this).attr('href').replace('#','.');
    $('.content>div').removeClass('open');
    $(tab).addClass('open');
  });
});

$('.ui.dropdown')
    .dropdown()
;

Template.Your_Profile.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displaySuccessMessage, false);
  this.messageFlags.set(displayErrorMessages, false);
  this.context = Users.getSchema().namedContext('Your_Profile');
});

Template.Your_Profile.helpers({
  successClass() {
    return Template.instance().messageFlags.get(displaySuccessMessage) ? 'success' : '';
  },
  displaySuccessMessage() {
    return Template.instance().messageFlags.get(displaySuccessMessage);
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  current() {
    return Users.findDoc(Meteor.user().profile.name);
  },
});

<<<<<<< HEAD





=======
Template.Your_Profile.events({
  'submit .profile-data-form'(event, instance) {
    event.preventDefault();
    const first = event.target.First.value;
    const last = event.target.Last.value;
    const avatar = event.target.Avatar.value;
    const profile = Meteor.user().profile.name; // schema requires username.
    const twitter = event.target.Twitter.value;
    const bio = event.target.Bio.value;
    const updatedProfileData = { first, last, avatar, twitter, bio, profile };

    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that updatedProfileData reflects what will be inserted.
    Users.getSchema().clean(updatedProfileData);
    // Determine validity.
    instance.context.validate(updatedProfileData);

    if (instance.context.isValid()) {
      const docID = Users.findDoc(Meteor.user().profile.name)._id;
      const id = Users.update(docID, { $set: updatedProfileData });
      instance.messageFlags.set(displaySuccessMessage, id);
      instance.messageFlags.set(displayErrorMessages, false);
    } else {
      instance.messageFlags.set(displaySuccessMessage, false);
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
  'submit .preference-data-form'(event, instance) {
    event.preventDefault();
    const spicy = event.target.Spicy.checked;
    const vegetarian = event.target.Vegetarian.checked;
    const vegan = event.target.Vegan.checked;
    const profile = Meteor.user().profile.name; // schema requires username.
    const price = event.target.Price.value;
    const updatedPreferenceData = { spicy, vegetarian, vegan, price, profile };

    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that updatedProfileData reflects what will be inserted.
    Users.getSchema().clean(updatedPreferenceData);
    // Determine validity.
    instance.context.validate(updatedPreferenceData);

    if (instance.context.isValid()) {
      const docID = Users.findDoc(Meteor.user().profile.name)._id;
      const id = Users.update(docID, { $set: updatedPreferenceData });
      instance.messageFlags.set(displaySuccessMessage, id);
      instance.messageFlags.set(displayErrorMessages, false);
    } else {
      instance.messageFlags.set(displaySuccessMessage, false);
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
>>>>>>> m3-profile-finishup
