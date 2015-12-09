var _ = require('lodash');
var Backbone = require('backbone');

var BaseModel = Backbone.Model.extend({
	// urlRoot: 'api/v1/',
	// localAttributes: [],
	// toJSON: function () {
	// 	return _.clone(_.omit(this.attributes, this.localAttributes));
	// },
	// getByPath: function (path) {
	// 	var paths = path ? path.split('.') : [];

	// 	if (paths.length === 0) {
	// 		return this.get();
	// 	}
	// 	var obj = this.get(paths[0]);
	// 	for (var i = 1; i < paths.length; i++) {
	// 		if (obj) {
	// 			obj = obj[paths[i]];
	// 		}
	// 	}
	// 	return obj;
	// }
    // clone: function() {
    //   return new this.constructor(this.attributes);
    // },

	deepClone: function() {
		// var newModel = new MyModel(_.cloneDeep(oldModel.toJSON());
		// return _.cloneDeep(this);
		return new this.constructor(_.cloneDeep(this.toJSON()));
	}
});

var thingy = {
	'waka': 'doo'
};

var collection = new Backbone.Collection([{
	id: 1
}, {
	id: 2
}, {
	id: 3
}]);

var model = new BaseModel({
	id: 1,
	name: 'name',
	description: 'description',
	thingy: thingy,
	clients: collection
});

var clone = model.deepClone();

function printstatus() {
	console.log(model.toJSON(), '----', model.get('clients').toJSON());
	console.log(clone.toJSON(), '----', clone.get('clients').toJSON());
};

printstatus();

thingy.waka = 'waka';

// printstatus();

console.log(collection.toJSON());