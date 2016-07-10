import Ember from 'ember';

export default Ember.Controller.extend({
	name: '',
	address1: '',
	address2: '',
	email: '',
	phone: '',
	vip: false,
	success: false,
	actions: {

		saveContact() {
			const name = this.get('name');
			const address1 = this.get('address1');
			const address2 = this.get('address2');
			const phone = this.get('phone');
			const email = this.get('email');
			const vip = this.get('vip');

			if(name.length > 0) {

				var dataToSend = { 
					name: name,
					address1: address1,
					address2: address2,
					phone: phone,
					email: email,
					vip: vip
				};

				const newContact = this.store.createRecord('contact', dataToSend);
				newContact.save();

				this.set('name', '');
				this.set('email', '');
				this.set('address1', '');
				this.set('address2', '');
				this.set('phone', '');
				this.set('vip', false);
				this.set('success', true);

			} else {

				alert('Please enter a name.');

			}
	    }

	}
});
