Template.postEdit.events({
	//template event callback
	'submit form': function(e) {
		e.preventDefault();

		var currentPostId = this._id;

		var postProperties = {

			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title').val()
		}

		Posts.update(currentPostId, {$set: postProperties}, function(error)
		{
			if(error)
			{
				alert(error.reason);
			}
			else
			{
				Router.go('postPage', {_id: currentPostId});
			}
		});
	}, 
	//template event callback
	//The delete callback is extremely simple: suppress the default click event, then ask for confirmation.
	'click .delete': function (e) {
		e.preventDefault();

		if (confirm ("Delete this post?"))
		{
			var currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
		}
	}
});