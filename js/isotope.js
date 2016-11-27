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
  $grid.fadeIn(1000).isotope('layout');
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
  sortBy: 'original-order',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gridblog-sizer'
  }
});

$gridblog.imagesLoaded().progress( function() {
  $gridblog.fadeIn(1000).isotope('layout');
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
