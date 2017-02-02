$('.category').off('click.category').on('click.category', function(e){
  e.preventDefault();
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

$(".musics").off('click.music').on('click.music', function(e) {
  // filter music items
  e.preventDefault();
  $grid.isotope({ filter: '.music' });
});

$(".mixes").off('click.mixes').on('click.mixes', function(e) {
  // filter event items
  e.preventDefault();
  $grid.isotope({ filter: '.mix' });
});

$(".prints").off('click.prints').on('click.prints', function(e) {
  // filter print items
  e.preventDefault();
  $grid.isotope({ filter: '.print' });
});

$(".all").off('click.all').on('click.all', function(e) {
  // show all items
  e.preventDefault();
  $grid.isotope({ filter: '*' });
});

// //Isotope gridblog
// var $gridblog = $('.gridblog').isotope({
//   itemSelector: '.gridblog-item',
//   sortBy: 'original-order',
//   percentPosition: true,
//   masonry: {
//     // use outer width of grid-sizer for columnWidth
//     columnWidth: '.gridblog-sizer'
//   }
// });
//
// $gridblog.imagesLoaded().progress( function() {
//   $gridblog.fadeIn(1000).isotope('layout');
// });
//
// $(".things").click(function() {
//   // filter things items
//   $gridblog.isotope({ filter: '.thing' });
// });
//
// $(".places").click(function() {
//   // filter places items
//   $gridblog.isotope({ filter: '.place' });
// });
//
// $(".peoples").click(function() {
//   // filter people items
//   $gridblog.isotope({ filter: '.people' });
// });
//
// $(".all").click(function() {
//   // show all items
//   $gridblog.isotope({ filter: '*' });
// });
