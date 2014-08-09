define(function (require) {
  var $ = require('jquery')
    , lax = require('parallax')
    ;

  // Vendor libraries.
  var Masonry = require('masonry')

  var $window     = $(window),
      $bodyhtml   = $('body,html'),
      $nav        = $('.nav'),
      $header     = $('header'),
      $main       = $('main'),
      $aside      = $('aside'),
      $nav_link   = $('.nav a'),
      $feed       = $('.feed'),
      $ads        = $('.feed-ads'),
      $feature    = $('.featured'),
      feature_h   = $feature.outerHeight(),
      ads_pos     = $ads.offset().top,
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
      var $post = $('.feed .post');

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
      $aside.css({'height':$feed.outerHeight()});
    },

    scrollFunctions: function() {
      var self = this;
      $window.on('scroll', function() {
        // self.fixedNav();
        self.stick('nav');
        self.stick('ads');
      });
    },

    fixedNav: function() {

      if (scroll_top >= nav_pos) {
        $nav.css({'position':'fixed','top':0});
      }
      else {
        this.layoutPage();
      }
    },

    stick: function(type) {
      scroll_top = $window.scrollTop();
      stop = main_h*0.5;

      switch(type) {
        case 'nav':
          if (scroll_top >= nav_pos) {
            $nav.css({'position':'fixed','top':0});
          }
          else {
            this.layoutPage();
          }
          break;

        case 'ads':
          var ads_w = $ads.outerWidth();
          if (scroll_top >= ads_pos-nav_h) {
            $ads.css({'position':'fixed','top':nav_h, 'right':0, 'width': ads_w});
            if (scroll_top >= stop) {
              $ads.css({'position':'absolute','top':stop-feature_h-nav_h-46});
            }
          }
          else {
            $ads.removeAttr('style');
          }
          break;
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


  var search = {

    expand: function() {
      window_h = $window.height();
      scroll_top = $window.scrollTop();

      $nav.css({'min-height':window_h});

      if (scroll_top < nav_pos) {
        $bodyhtml.animate({'scrollTop':nav_pos},275);
      }

    }

  }

  // Click handlers.
  $('#site-search').on('click', search.expand);

});

