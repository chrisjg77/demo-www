define(function (require) {
  var $ = require('jquery')
    ;

  var $window = $(window);

  var lax = {
    init: function(keyframes) {

      console.log(keyframes);

      for(i=0;i<keyframes;i++) {
        console.log(keyframes[i]);
      }

      $window.on('scroll', function() {


      });

    }
  }

  return lax;

});
