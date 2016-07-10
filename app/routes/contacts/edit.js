import Ember from 'ember';

export default Ember.Route.extend({

	actions: {

		saveContact(contact) {
			contact.save().then(() => this.transitionTo('contacts'));
		},

		willTransition(transition) {

			let model = this.controller.get('model');

			if (model.get('hasDirtyAttributes')) {
				let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

				if (confirmation) {
					model.rollbackAttributes();
				} else {
					transition.abort();
				}
			}

		},

		deleteContact(contact) {
			let confirmation = confirm('Are you sure?');

			if (confirmation) {
				contact.destroyRecord().then(() => this.transitionTo('contacts'));
			}

		}

	}

});
