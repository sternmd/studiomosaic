var Module = (function () {

// Fade In
var fadeIn = function () {
  $("p").addClass("load");
  $("h1").addClass("load");
  $("h2").addClass("load");
  $("h3").addClass("load");
  $("span .char").addClass("load");
  $("hr").addClass("load");
  $("img").addClass("load");
  $(".btn").addClass("load");
  // $(".blog-entry__date").addClass("load");
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
      url:'http://www.omdbapi.com/?t=' + title,
      dataType: 'json',
      success: function(data) {
        var image  = data.Poster,
            year   = data.Year,
            genre  = data.Genre,
            awards = data.Awards,
            plot   = data.Plot;

        $('.filmTitle').eq(i).append(" (" + year + ")");
        $('.filmImg').eq(i).attr("src", image);
        $('.filmPlot').eq(i).text(plot);
        $('.filmGenre').eq(i).append(genre);
        $('.filmAwards').eq(i).text(awards);
      }
    });
  }

  $('tr .filmTitle').each(function(i) {
    var $title = $(this).text();
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
   blogIndex: blogIndex
 };

})();

Module.insertFilm();
Module.fadeIn();
Module.explodingText();
Module.hamburgerMenu();
Module.indexIcons();
Module.smoothScroll();
Module.blogIndex();
