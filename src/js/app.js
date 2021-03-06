var Module = (function () {

// Fade In
var fadeIn = function () {
  $('p, h1, h2, h3, h4, span.char, hr, img, .btn').addClass("load");
};

//Studio Logo
var studioLogo = function() {
  $('img.logo').mouseenter(function(){
    $(this).attr('src', './images/studiomosaiclogo-dark.svg');
  });

  $('img.logo').mouseleave(function(){
    $(this).attr('src', './images/studiomosaiclogo.svg');
  });
};

// Explosion
var explodingText = function () {
  $('.explode').each(function() {
    var text = $(this).text();
    $(this).html(text.replace(/./g, "<span>$&</span>"));
  });

  $('.explode span').each(function() {
    var min     = -200,
        max     = 200,
        min2    = -300,
        max2    = 300,
        random  = Math.floor(Math.random() * (max - min + 1)) + min,
        random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2,
        css     = "top:" + random + "px; left:" + random2 + "px",
        el      = $(this);

    el.on({
      mouseenter: function() {
        el.attr("style", css);
      },
      mouseleave: function() {
        setTimeout(function() {
          el.removeAttr("style");
        }, 300);
      }
    });
  });
};

var insertFilm = function () {

  function getMovie(title, i) {
    $.ajax({
      url:'https://api.themoviedb.org/3/search/movie?api_key=d87d5bce9190c8fc27531b278ebf019d&query=' + title,
      dataType: 'json',
      success: function(data) {
        var film = data.results[0],
            image  = 'https://image.tmdb.org/t/p/w185/' + film.poster_path,
            year   = film.release_date.substring(0,4),
            plot   = film.overview;

        $('.filmTitle').eq(i).append(" (" + year + ")");
        $('.filmImg').eq(i).attr("src", image);
        $('.filmPlot').eq(i).text(plot);
      }
    });
  }

  $('tr .filmTitle').each(function(i) {
    var $title = $(this).text().split(' ').join('+');
    getMovie($title, i);
  });

};

// Hamburger
var hamburgerMenu = function() {
  var $hamburger = $(".hamburger"),
      $menu      = $(".menu"),
      $body      = $("body"),
      $html      = $("html");

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $body.toggleClass("menu-active");
    $html.toggleClass("menu-active");
    $menu.toggleClass("fade");
  });
};

// Index Icons
var indexIcons = function () {
  $(window).scroll(function() {
    var scroll     = $(window).scrollTop(),
        studioText = $('.studio'),
        matrix     = $('.icon-matrix'),
        arrowUp    = $('.icon-arrow-up'),
        arrowDown  = $('.icon-arrow-down');

    function DisplayAboveFold(elem) {
      if (scroll  < 400) {
          elem.fadeIn("slow");
        } else {
          elem.fadeOut("slow");
        }
    }

    function DisplayAtBottom(elem) {
      if (scroll + $(window).height() === $(document).height()) {
          elem.fadeIn("slow");
      } else {
          elem.fadeOut("slow");
      }
    }

    DisplayAboveFold(studioText);
    DisplayAboveFold(arrowDown);
    DisplayAtBottom(arrowUp);
    DisplayAtBottom(matrix);
  });
};

// Blog Index Page
var blogIndex = function() {
  var blogImage = $('.blog-entry__image'),
      blogEntry = $('.blog-entry');

    blogEntry.hover(function(){
      var $this = $(this);
      if ($(window).width() > 550) {
        $this.find(blogImage).toggleClass('show animated fadeInRight');
      }
    });
};

// Smooth Scroll
var smoothScroll = function () {
  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });
  });
};

return {
   fadeIn: fadeIn,
   explodingText: explodingText,
   hamburgerMenu: hamburgerMenu,
   indexIcons: indexIcons,
   smoothScroll: smoothScroll,
   insertFilm: insertFilm,
   blogIndex: blogIndex,
   studioLogo: studioLogo
 };

})();

Module.insertFilm();
Module.fadeIn();
Module.studioLogo();
Module.explodingText();
Module.hamburgerMenu();
Module.indexIcons();
Module.smoothScroll();
Module.blogIndex();
