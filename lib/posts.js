Posts = new Mongo.Collection('posts');

/*
Posts.allow(
{
	insert: function(userId, doc)
	{
		//only allow posting if you are logged in
		return !! userId;

	}
});
*/

Meteor.methods({
	postInsert: function(postAttributes)
	{
		check(Meteor.userId(), String);
		check(postAttributes, 
			{
			title: String,
			url: String
			});

		//Prevent duplicates
		//And since we're triggering a return call, the method stops at that 
		//point without executing the insert statement, thus elegantly preventing any duplicates.
		var postWithSameLink = Posts.findOne({url: postAttributes.url});
		if (postWithSameLink)
			{
				return { 
					postExists: true,
					_id: postWithSameLink._id
				}
			}

		var user = Meteor.user();
		var post = _.extend(postAttributes, //part of the Underscore library
			{
				userId: user._id,
				author: user.username,
				submitted: new Date()

			});

		var postId = Posts.insert(post);
		return {
			_id: postId
			};
	}

});