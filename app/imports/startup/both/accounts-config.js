import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

/**
if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });
}
*/


Accounts.onLogin(function onLogin() {
  const id = Meteor.userId();
  const onLandingPage = FlowRouter.current().path && (FlowRouter.current().path === '/');
  const initialLogin = (id && onLandingPage);

  if (initialLogin) {
    const profile = Meteor.user().profile.name;
    FlowRouter.go('/your_profile');
  }
});

Accounts.onLogout(function logout() {
  FlowRouter.go('/');
});

