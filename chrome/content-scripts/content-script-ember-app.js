addEmberTriggerButtonToDOM();

function addEmberTriggerButtonToDOM() {
  let githubNavigationBar = document.querySelector('.reponav');
  let elem = document.createElement('a');
  elem.id = 'ember-app-start-button';
  elem.text = 'Start Ember';
  elem.onclick = runEmber;
  githubNavigationBar.appendChild(elem);
}

function runEmber(){
  cleanGithubContainer();
  addEmberContainerToGithubContainer();
  require('ember-browser-extension/app')['default'].create({ rootElement: '#content-script-selector' });
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