import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr(),
	address1: attr(),
	address2: attr(),
	email: attr(),
	phone: attr(),
	vip: attr()
});
