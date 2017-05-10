/**
 * Created by Xla on 4/17/17.
 * Edited by Unjammy.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/users.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
$(function () {
  $('.right-menu a').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');


    var tab = $(this).attr('href').replace('#','.');
    $('.content>div').removeClass('open');
    $(tab).addClass('open');
  });
});

Template.Your_Profile.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
});

Template.Your_Profile.helpers({
  current() {
    return Users.findDoc(Meteor.user().profile.name);
  },
});






