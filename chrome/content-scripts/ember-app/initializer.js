// import { GITHUB_BUTTON_ID, EMBER_EXTENSION_LOCATION_HASH_PREFIX, EMBER_ROOT_ELEMENT_SELECTOR } from './constants';

function addEmberTriggerButtonToDOM() {
  const githubNavigationBar = document.querySelector('.js-repo-nav > ul');
  const triggerButton = createTriggerButton();
  githubNavigationBar.appendChild(triggerButton);
}

function createTriggerButton() {
  const listElem = document.createElement('li');
  listElem.classList = 'd-flex';

  const elem = document.createElement('a');
  elem.id = GITHUB_BUTTON_ID;
  elem.text = 'Start Ember';
  elem.classList = 'js-selected-navigation-item reponav-item';
  elem.href = EMBER_EXTENSION_LOCATION_HASH_PREFIX;
  elem.onclick = runEmber;

  listElem.appendChild(elem);

  return listElem;
}

function runEmber(){
  cleanGithubContainer();
  addEmberContainerToGithubContainer();
  const App = require('ember-browser-extension/app')['default'].create({ autoboot: false });

  const options = {
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
  const githubContainer = document.querySelector('.new-discussion-timeline');
  const childNodeToRemove = githubContainer.querySelector('div.repository-content');
  githubContainer.removeChild(childNodeToRemove);
}

function addEmberContainerToGithubContainer(){
  const githubContainer = document.querySelector('.new-discussion-timeline');
  const emberContainer = document.createElement('div');
  emberContainer.id = 'content-script-selector';
  githubContainer.appendChild(emberContainer);
}
