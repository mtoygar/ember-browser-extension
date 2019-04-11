// import { GITHUB_BUTTON_ID, EMBER_EXTENSION_LOCATION_HASH_PREFIX } from './constants';

function loadEmberOnExtensionUrl() {
  if(windowLoadedWithExtensionUrl()) {
    document.querySelector(`#${GITHUB_BUTTON_ID}`).click();
  }
}

function windowLoadedWithExtensionUrl() {
  return window.location.hash.includes(EMBER_EXTENSION_LOCATION_HASH_PREFIX);
}