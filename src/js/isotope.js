$('.category').off('click.category').on('click.category', function(e){
  e.preventDefault();
  $(this).toggleClass('clicked');
  $(".category").not(this).removeClass("clicked");
});

// Isotope work
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  sortBy: 'original-order',
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
