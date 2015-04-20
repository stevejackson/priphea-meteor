$(document).ready(function() {
  var recalculateSizes = function() {
    aboveHeight = $('#hangbar').height();
    windowHeight = $(window).height() - aboveHeight;

    // sidebar
    $('#sidebar').css('height', windowHeight);

    // cover art gallery
    coverArtPercent = 0.70;
    galleryHeight = windowHeight * coverArtPercent;
    $('#cover_art_gallery').css('height', galleryHeight);

    // song list
    songListHeight = windowHeight * (1.0 - coverArtPercent);
    $('#song_list').css('height', songListHeight);
  }

  recalculateSizes();
  $(window).resize(recalculateSizes);
});
