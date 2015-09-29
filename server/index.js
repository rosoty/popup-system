Meteor.methods({
	insertPage: function(name,url,myselect) {
		var attr={
			name:name,
			url:url,
			category:myselect
		};
		return pages.insert(attr);
	},
	deletepage: function(id) {
		pages.remove(id);
	},
	updatepage: function(id,attr){
		return pages.update({_id:id},{$set: attr});
	},
});