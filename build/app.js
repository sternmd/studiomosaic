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

// Hamburger
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

// Index Icons
$(window).scroll(function() {
  var scroll     = $(window).scrollTop(),
      studioText = $('.studio'),
      matrix     = $('.icon-matrix'),
      arrowUp    = $('.icon-arrow-up'),
      arrowDown  = $('.icon-arrow-down');

  function displayAboveFold(elem) {
    if (scroll  < 400) {
        elem.fadeIn("slow");
      } else {
        elem.fadeOut("slow");
      }
  };

  function displayAtBottom(elem) {
    if (scroll + $(window).height() === $(document).height()) {
        elem.fadeIn("slow");
    } else {
        elem.fadeOut("slow");
    }
  };

  displayAboveFold(studioText);
  displayAboveFold(arrowDown);
  displayAtBottom(arrowUp);
  displayAtBottom(matrix);

});

// Smooth Scroll
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

//ASCII Console Art
// (function() {var m = 'font-family:monospace;color:#';if(window.console)console.log('
//                         *%@@@@&%#((((#&@@@@%*
//                    (&@%, ./%# &@@@@@@@/ %(*  *&@&/
//                .&@/ .#@@@@@@@@./@@@@@.(@@@@@@@@/  %@#
//              ,@%  %@@@@@@@@@@@@.*@@@.#@@@@@@@@@@@@( ,@&
//            %@/ %@% &@@@@@@@@@@@@*,# %@@@@@@@@@@@@/.@@/ %@/
//          #@.*@/ *((*.  .  ./&@@@@. /@@@@#,. .,  /%%(. %%.,@,
//         @%  %@@@@@@@( @@@@&* /@/,@&,.#@@@@# &@@@@@@@.,@(
//       %@..@& %@@@@@@@@@%,@#*.  .,   /   .(&& @@@@@@@@@@,.@% *@
//      @# %@# ,@@@@@@@@@@& .&@@@@@&  /@@@@@@& .@@@@@@@@@@% .&@*.@(
//     @( &@@@&.@@@@@@@@@(.@@@@@@@@%.@@@@@@@@@@& @@@@@@@@@% @@@@/.&(
//    #& &@@@@@ %@@@@@@@,*@@@@@@@@@//@@@@@@@@@@@@.%@@@@@@@(.@@@@@. @.
//   ,@ #@@@@@@.,@@@@@% #@@@@@@@@@@%.@@@@@@@@@@@@@**@@@@@@ /@@@@@@,*@
//   &(.@@@@@@@& %@@@& #@@@@@@@@@@@@. (@@@@@@@@@@@@, @@@@/*@@@@@@@& &(
//  .@. %@@@@@@@% @@@ #@@@@@%*.             .*&@@@@@**@@% @@@@@@@@( (@
//  *@ &&. #@@@@@( @(,@&, *&@@@% (@#*,/&@ ,@@@&/  #@@ &% @@@@@@/ (@/.@.
//  (& @@@@@/ .#&@#   ,%@@@@@@@ %#      .@.%@@@@@@@.    &@&(. #@@@@% @,
//  (& @@@@@@&,      .@@@@@@@@@ @*       @,#@@@@@@@@&  ,*.  (@@@@@@% @,
//  /& @@@# .&@@@@ % (/ ,&@@@@@,/@,     &@ @@@@@@( .#.#,*@@@@%..&@@(.@.
//  ,@ , #@@@@@@@.#@& @@@@#. .*%* #@@@@&. &%*. ,%@@@#.@@,*@@@@@@@. .,@
//   @,,@@@@@@@@,*@@@#,@@@@@@@@@@@   #%&@@@@@@@@@( &@@@.#@@@@@@@@ %#
//   #% @@@@@@@( @@@@@*.@@@@@@@@@@@@@ ,@@@@@@@@@@@& (@@@@& &@@@@@@# @.
//    @,.@@@@@@ /@@@@@@& @@@@@@@@@@@@& &@@@@@@@@@& @@@@@@@,,@@@@@# %%
//    ,@ *@@@@&.&@@@@@@@@,(@@@@@@@@@@% @@@@@@@@@//@@@@@@@@# @@@@& /@
//     #& ,@@@#,@@@@@@@@@@(,@@@@@@@@& *@@@@@@@& &@@@@@@@@@& &@@@ #@.
//      (@, ..(.@@@@@@@@@@@.* /%&%*     (&&(. *.@@@@@@@@@@# # , %&
//       ,@% #@.,@@@@@@@@@.#@@@@@%..# * *@@@@@@,#@@@@@@@@@ /@,.@/
//         /@, && (@@@@@* %#*. .#@@@, #@@@(. ,(%( /&@@@&,.@# %@
//           &&  &@#*  ,/(%@@@@@@@@& /.@@@@@@@@/*,  /%@# *@(
//             %@* * %@@@@@@@@@@@@& @@#.@@@@@@@@@@@@@*,, &@/
//               .&&, /&@@@@@@@@@# @@@@& @@@@@@@@@@#, (@#
//                  .&@%, .(&@@@./@@@@@@@.(@@@%*  *@@(
//                      /@@&(.   .,,***,..   .(&@#.
//                            ,/#&&@@@@&&%(,
// ');
// }())
