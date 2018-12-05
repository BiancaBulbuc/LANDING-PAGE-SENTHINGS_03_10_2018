function toggleMenu() {
 $("#hamburgerMenu").toggleClass("collapsed");
 $(".aa-mobile-overlay").animate({
       height: "toggle",
       opacity: "toggle"
   }, 300);
}

// $(".aa-mobile-overlay").on('click', function() {
//   $("#hamburgerMenu").toggleClass("collapsed");
//   $(".aa-mobile-overlay").fadeToggle(200);
// });
var tl = new TimelineMax();

tl.from('#logo-animated', 1, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
.from('#right-down-corner', 1, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})
.from('#left-up-corner', 1, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})


$(document).ready(function(){

  setTimeout(function(){

    $("#name").removeClass("larger");

    $("#name span").each(function(){
      $(this).css("-webkit-transition-delay",$(this).data("delay")+"ms").css("transition-delay",$(this).data("delay")+"ms");
      $(this).addClass("visible");
    });

	}, 1000);

});







// PROGRESS bar
$(document).ready(function() {
  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scroll;

  document.addEventListener('scroll', function() {
    scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    console.log(scroll);
    progress.style.setProperty('--scroll', scroll + '%');
  });
});
