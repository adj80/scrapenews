var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = newSchema({
	title: {
		type: String

	},

	body: {
		type: String

	}

});

var Comment = mongoose.model ("Comment", CommentSchema);

module.exports = Comment;