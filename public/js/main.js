define(function (require) {
  var $ = require('jquery')
    , Masonry = require('masonry')
    ;

    console.log('Javascript Loaded Asynchronously :D');

    var msnry = new Masonry ('.masonry', {
      itemSelector: '.block',
      isAnimated: false
    });

    $('.feed .post').each(function(i) {
      setTimeout(function() {
        $('.feed article.post').eq(i).addClass('loaded');
      },75*i);
    });


});

