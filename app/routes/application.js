import Ember from 'ember';

export default Ember.Route.extend({

	actions: {

		error(error) {
	      if (error) {
	        return this.transitionTo('404');
	      }
	    }

	}
	
});