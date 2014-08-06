define(function (require) {
  var $ = require('jquery')
    , Masonry = require('masonry')
    ;

    console.log('Javascript Loaded Asynchronously :D');

    var msnry = new Masonry ('.masonry', {
      itemSelector: '.block',
      isAnimated: false
    });

});

