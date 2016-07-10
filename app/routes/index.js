import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.query('contact', { vip: true } ).then(function(result) {
		 	return result;
		});
	}
});
