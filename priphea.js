if (Meteor.isClient) {

  Template.browser.helpers({

    albums: function() {
      var i = 0;

      var albumArtFilenames = [];

      for(i = 875; i < 1311; i++) {
        prefix = "/images/fakecovers/";
        albumArtFilenames.push(prefix + i.toString() + ".jpg");
      }

      return albumArtFilenames;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
