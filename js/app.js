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
