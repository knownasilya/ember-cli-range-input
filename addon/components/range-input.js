import Ember from 'ember';

var on = Ember.on;
var observer = Ember.observer;
var computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['range-input'],
  min: 0,
  max: 10,
  step: 1,

  value: computed(function (key, value) {
    return !value && value !== 0 ? this.get('min') : value;
  }),

  onValueChange: observer('value', function () {
    this.get('$range').setValue(this.get('value'));
  }),

  setup: on('didInsertElement', function () {
    this.$().find('.range-original').rangeinput();
    this.set('$range', this.$().find(':range').data('rangeinput'));
  }),

  change: function () {
    this.set('value', this.get('$range').getValue());
  },

  drag: function () {
    this.set('value', this.get('$range').getValue());
  }
});
