# ember-browser-extension

This repo is started to guide and facilitate developing a browser extension using Ember. It makes use of Ember and [Mozilla's webextension-polyfill](https://github.com/mozilla/webextension-polyfill) to create a maintainable and scalable extension.

# Contained Examples

## Popup
The ember app is booted inside a div(with id `chrome-app`) in `popup.html` using the `popup.js`. [Click to access related code.](https://github.com/mtoygar/ember-browser-extension/tree/master/chrome/popup)
## Basic Content Script
Contains an example of a content script applicable to both Firefox and Chrome thanks to webextension-polyfill. [Click to access related code.](https://github.com/mtoygar/ember-browser-extension/blob/master/chrome/content-scripts/basic-content-script.js)
## Content Script with Ember App
Contains an example of a content script build by Ember. The prepared example is inspired by the [ZenHub's extension](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) and works on this repo's url(https://github.com/mtoygar/ember-browser-extension/). When user visited the repo, extension simply adds a button to the navigation bar and this button triggers ember boot when clicked. Therefore, when user click the button ember is booted and a location hash is added to the url. After this point, all routing and state management is done by using Ember. One can see the possible routes on [router.js](https://github.com/mtoygar/ember-browser-extension/blob/master/app/router.js)

### Screenshot

<img src="https://raw.githubusercontent.com/mtoygar/ember-browser-extension/master/docs/screenshots/nav-bar-and-container.png" alt="content script backed by Ember App" />

## Installation

* `git clone <repository-url>` this repository
* `cd ember-browser-extension`
* `yarn install`

## Running / Development

* `ember serve`
* For `Chrome`:
  * Navigate to chrome://extensions in your browser. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over More Tools and selecting Extensions.
  * Check the box next to Developer Mode.
  * Click Load Unpacked Extension and select the directory for your "Hello Extensions" extension.
* For `Firefox`:
  * enter about:debugging in the URL bar
  * click "Load Temporary Add-on"
  * open the extension's directory and select any file inside the extension.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [Ember.Application(starting point of Ember application)](https://api.emberjs.com/ember/3.3/classes/Application)
* [Firefox Add-ons Developer Guides](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [Chrome Extensions Developer Guides](https://developer.chrome.com/extensions)
* [A framework for ambitious Chrome Extensions by Envoy Engineering](https://envoy.engineering/a-framework-for-ambitious-chrome-extensions-b08d1f4b944d)


