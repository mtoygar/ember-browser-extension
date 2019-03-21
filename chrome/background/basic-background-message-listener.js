const MAGICAL_THRESHOLD = 0.372;

chrome.runtime.onMessage.addListener(messageListener);

function messageListener(request, sender, sendResponse) {
  let response = Math.random() > MAGICAL_THRESHOLD ? 'Hi, Zoey!' : 'Hello, Tomster!';
  sendResponse(response);
}
