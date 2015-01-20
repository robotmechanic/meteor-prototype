if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    desc: 'Telescope'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    desc: 'Meteor stuff'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    desc: 'The book'
  });
}