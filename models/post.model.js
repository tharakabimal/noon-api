var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	// _id: {
	// 	type:String,
	// 	required: true
	// },
	user: {
		type:String,
		required: true
	},
	caption: {
		type:String,
		required: true
	},
	likes: {
		type:Number,
		required: true
	},
	liked: {
		type:Boolean,
		required: true
	},
	img_url: {
		type: String,
		required: true
	}
});


postSchema.statics = {
	list() {
		return this.find().exec();
	},
	liked() {
		return this.find({liked: true}).exec();
	}
}


module.exports = mongoose.model('Posts', postSchema);