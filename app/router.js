import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('popup', { path: '/popup/popup.html' });
  this.route('content-script', { path: 'ember', resetNameSpace: true }, function() {
    this.route('index', { path: '' });
    this.route('meet', { path: 'meet-point' });
  });
});

export default Router;
