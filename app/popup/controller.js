import Controller from '@ember/controller';

export default Controller.extend({
  confident: true,

  actions: {
    fistBump(){
      let response = Math.random() > 0.4 ? 'I liked you!' : 'No, not this time!';
      this.set('response', response);
      this.set('confident', false);
    }
  }
});
