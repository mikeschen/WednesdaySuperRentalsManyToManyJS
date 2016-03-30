import Ember from 'ember';

export default Ember.Route.extend({
  save3(params) {
    var newRental = this.store.createRecord('rental', params);
    var city = params.city;
    city.get('rentals').addObject(newRental);
    newRental.save().then(function(){
      return city.save();
    });
    this.transitionTo('city',params.city);
  }
});
