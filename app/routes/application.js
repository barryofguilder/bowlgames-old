import Ember from 'ember';

const years = [2011, 2012, 2013, 2014];

export default Ember.Route.extend({
  model() {
    return years;
  }
});
