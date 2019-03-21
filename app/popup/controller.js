import Controller from '@ember/controller';
import browser from 'webextension-polyfill';

const MAGICAL_THRESHOLD = 0.3;

export default Controller.extend({
  confident: true,

  actions: {
    fistBump(){
      let response = Math.random() > MAGICAL_THRESHOLD ? 'I liked you!' : 'No, not this time!';
      this.setAndShowRepsonse(response);
    },

    sendMessageToBackground(){
      browser.runtime.sendMessage('HI FROM POPUP').then(response => {
        this.setAndShowRepsonse(response);
      });
    }
  },

  setAndShowRepsonse(response){
    this.set('response', response);
    this.set('confident', false);
  }
});
