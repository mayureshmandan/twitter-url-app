var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

		userId       : String,
		token        : String,
		displayName  : String,
		username     : String,
		count        : Number,
		tweets       : {}

});

module.exports = mongoose.model('User', userSchema);