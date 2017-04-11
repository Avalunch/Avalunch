import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/restaurants', {
  name: 'Restaurants_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Restaurants_Page' });
  },
});

FlowRouter.route('/about-us', {
  name: 'About_Us_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Us_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
