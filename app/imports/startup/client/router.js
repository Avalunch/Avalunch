import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});


FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});
FlowRouter.route('/directory', {
  name: 'Directory',
  action() {
    BlazeLayout.render('App_Body', { main: 'Directory' });
  },
});

FlowRouter.route('/sign_up', {
  name: 'Sign_up',
  action() {
    BlazeLayout.render('App_Body', { main: 'Sign_up' });
  },
});

FlowRouter.route('/paradise_palms', {
  name: 'Paradise_palms',
  action() {
    BlazeLayout.render('App_Body', { main: 'Paradise_palms' });
  },
});


FlowRouter.route('/upper_campus', {
  name: 'Upper_campus',
  action() {
    BlazeLayout.render('App_Body', { main: 'Upper_campus' });
  },
});

FlowRouter.route('/jamba_juice', {
  name: 'jamba_juice',
  action() {
    BlazeLayout.render('App_Body', { main: 'jamba_juice' });
  },
});


FlowRouter.route('/your_profile', {
  name: 'Your_profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'Your_profile' });
  },
});

FlowRouter.route('/aboutus', {
  name: 'about_us',
  action() {
    BlazeLayout.render('App_Body', { main: 'about_us' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Page',
  action() {
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
