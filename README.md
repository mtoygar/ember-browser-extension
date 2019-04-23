# ember-browser-extension

This repo is started to guide and facilitate developing a browser extension using Ember. It makes use of Ember and [Mozilla's webextension-polyfill](https://github.com/mozilla/webextension-polyfill) to create a maintainable and scalable extension.

# Contained Examples

## Popup
The ember app is booted inside a div(with id `chrome-app`) in `popup.html` using the `popup.js`. [Click to access related code.](https://github.com/mtoygar/ember-browser-extension/tree/master/chrome/popup)
## Basic Content Script
Contains an example of a content script applicable to both Firefox and Chrome thanks to webextension-polyfill. [Click to access related code.](https://github.com/mtoygar/ember-browser-extension/blob/master/chrome/content-scripts/basic-content-script.js)
## Content Script with Ember App
Contains an example of a content script build by Ember. The prepared example is inspired by the [ZenHub's extension](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) and works on this repo's url(https://github.com/mozilla/webextension-polyfill). When user visited the repo, extension simply adds a button to the navigation bar and this button triggers ember boot when clicked. Therefore, when user click the button ember is booted and a location hash is added to the url. After this point, all routing and state management is done by using Ember. One can see the possible routes on [router.js](https://github.com/mtoygar/ember-browser-extension/blob/master/app/router.js)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-browser-extension`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
