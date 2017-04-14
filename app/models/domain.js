var mongoose = require('mongoose');

var domainSchema = mongoose.Schema({
		name: String,
		ocurrences: number
});

module.exports = mongoose.model('Domain', domainSchema);