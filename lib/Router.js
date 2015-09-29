Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    template: 'home',
	
});
Router.route('/page', {
    template: 'page',
	
});
Router.route('/page/edit/:_id', {
    template: 'editpage',
	data:function(){
		return pages.findOne({_id: this.params._id});
	}
	
});