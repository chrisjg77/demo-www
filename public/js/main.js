define(function (require) {
  var $ = require('jquery')
    , lax = require('parallax')
    ;

  // Vendor libraries.
  var Masonry = require('masonry')

  var $window     = $(window),
      $nav        = $('.nav'),
      $header     = $('header'),
      $main       = $('main'),
      $aside      = $('aside'),
      $nav_link   = $('.nav a'),
      nav_pos     = $nav.offset().top,
      nav_h       = $nav.outerHeight(),
      scroll_top  = $window.scrollTop(),
      main_h      = $main.outerHeight()
      ;


  var msnry = new Masonry ('.masonry', {
    itemSelector: '.block',
    isAnimated: false
  });


  var page = {

    loadFeed: function() {
      var $feed = $('.feed'),
          $post = $('.feed .post');

      if ($feed) {
        $post.each(function(i) {
          var $self = $(this);
          setTimeout(function() {
            $self.addClass('loaded');
          },75*i);
        });
      }
    },

    layoutPage: function() {
      $header.css({'position':'absolute','top':0})
      $main.css({'margin-top':nav_pos+nav_h});
      $nav.css({
        'position':'absolute',
        'top':nav_pos-1
      });
      $aside.css({'height':main_h});
    },

    scrollFunctions: function() {
      var self = this;
      $window.on('scroll', function() {
        self.fixedNav();
      });
    },

    fixedNav: function() {
      scroll_top = $window.scrollTop();
      if (scroll_top >= nav_pos) {
        $nav.css({'position':'fixed','top':0});
      }
      else {
        this.layoutPage();
      }
    },

    init : function () {
      // Load in posts sequentially.
      this.loadFeed();

      // Set fixed header.
      this.layoutPage();

      // Set nav to fixed after scrolling past header.
      this.scrollFunctions();
    }
  }


  // Start page.
  page.init();

  // Start parallax.
  lax.init([
    {
      'wrapper'   : 'featured',
      'animations' : [
        {
          'selector' : '.featured-content',
          'opacity' : [1,0],
        }
      ]
    }
  ]);

});

