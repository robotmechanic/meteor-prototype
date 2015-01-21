/*
var postsData = [
	{
		title:'Google',
		url: 'http://www.google.com',
		desc: 'Search engine'
	},

	{
		title:'Amazon',
		url: 'http://www.amazon.com',
		desc: 'Online book store'
	},

	{
		title:'Meteor',
		url: 'http://www.meteor.com',
		desc: 'Web tool'
	}
];

Template.postsList.helpers({posts: postsData});
*/
Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});  //the sign determines ascending or descending order
  }
});