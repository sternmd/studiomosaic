// Fade In
$("p").addClass("load");
$("h1").addClass("load");
$("h2").addClass("load");
$("h3").addClass("load");
$("span .char").addClass("load");
$("hr").addClass("load");
$("img").addClass("load");
$(".btn").addClass("load");

// Explosion
$('.explode').each(function() {
  var text = $(this).text();
  $(this).html(text.replace(/./g, "<span>$&</span>"));
});

$('.explode span').each(function() {
  var min = -200,
    max = 200,
    min2 = -300,
    max2 = 300,
    random = Math.floor(Math.random() * (max - min + 1)) + min,
    random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2,
    css = "top:" + random + "px; left:" + random2 + "px",
    el = $(this);

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

// Hamburger
var $hamburger = $(".hamburger"),
    $menu = $(".menu"),
    $body = $("body"),
    $html = $("html");

$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  $menu.toggleClass("fade");
  $body.toggleClass("menu-active");
  $html.toggleClass("menu-active");
});


$('.category').click(function(){
  $(this).toggleClass('clicked');
  $(".category").not(this).removeClass("clicked");
});

// Isotope work
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  sortBy: 'random',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

$(".musics").click(function() {
  // filter music items
  $grid.isotope({ filter: '.music' });
});

$(".events").click(function() {
  // filter event items
  $grid.isotope({ filter: '.event' });
});

$(".prints").click(function() {
  // filter print items
  $grid.isotope({ filter: '.print' });
});

$(".all").click(function() {
  // show all items
  $grid.isotope({ filter: '*' });
});


//Isotope gridblog
var $gridblog = $('.gridblog').isotope({
  itemSelector: '.gridblog-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gridblog-sizer'
  }
});

$gridblog.imagesLoaded().progress( function() {
  $gridblog.isotope('layout');
});

$(".things").click(function() {
  // filter things items
  $gridblog.isotope({ filter: '.thing' });
});

$(".places").click(function() {
  // filter places items
  $gridblog.isotope({ filter: '.place' });
});

$(".peoples").click(function() {
  // filter people items
  $gridblog.isotope({ filter: '.people' });
});

$(".all").click(function() {
  // show all items
  $gridblog.isotope({ filter: '*' });
});
