// import { GITHUB_BUTTON_ID, EMBER_EXTENSION_LOCATION_HASH_PREFIX, EMBER_ROOT_ELEMENT_SELECTOR } from './constants';

function addEmberTriggerButtonToDOM() {
  let githubNavigationBar = document.querySelector('.reponav');
  let elem = document.createElement('a');
  elem.id = GITHUB_BUTTON_ID;
  elem.text = 'Start Ember';
  elem.href = EMBER_EXTENSION_LOCATION_HASH_PREFIX;
  elem.onclick = runEmber;
  githubNavigationBar.appendChild(elem);
}

function runEmber(){
  cleanGithubContainer();
  addEmberContainerToGithubContainer();
  let App = require('ember-browser-extension/app')['default'].create({ autoboot: false });

  let options = {
    // Override the router's location adapter to prevent it from updating the URL in the address bar
    location: 'hash',

    // Override the default `rootElement` on the app to render into a specific `div` on the page
    rootElement: EMBER_ROOT_ELEMENT_SELECTOR
  };

  // Start the app either on ember container route or the route specified by window.location.hash
  const locationHash = window.location.hash || 'ember';
  App.visit(locationHash.replace('#',''), options);
}

function cleanGithubContainer(){
  let githubContainer = document.querySelector('.container.new-discussion-timeline');
  let childNodeToRemove = githubContainer.querySelector('div.repository-content');
  githubContainer.removeChild(childNodeToRemove);
}

function addEmberContainerToGithubContainer(){
  let githubContainer = document.querySelector('.container.new-discussion-timeline');
  let emberContainer = document.createElement('div');
  emberContainer.id = 'content-script-selector';
  githubContainer.appendChild(emberContainer);
}