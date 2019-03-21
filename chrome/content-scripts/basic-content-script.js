browser.runtime.sendMessage('HI FROM CS').then(response => {
  console.log(response);
  console.log('MESSAGE RECEIVED BY CONTENT SCRIPT');
});