// import addEmberTriggerButtonToDOM from './initializer';
// import loadEmberOnExtensionUrl from './url-observer';

class ContentScriptBooter {
  constructor() { 
   addEmberTriggerButtonToDOM();
   loadEmberOnExtensionUrl();
  }
}

let contentScript = new ContentScriptBooter();