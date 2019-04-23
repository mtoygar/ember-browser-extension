let App = require('ember-browser-extension/app')['default'].create({ autoboot: false });
App.visit('/popup', { rootElement: '#chrome-app' });