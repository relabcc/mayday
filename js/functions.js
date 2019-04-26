//add class
function a_c(a) {
  a.addClass("active");
}

//remove class
function r_c(a) {
  a.removeClass("active");
}

//convert em to px
function getValue(value) {
  var fontSize = $('html').css('font-size');
  return parseInt(fontSize) * value;
}

//init html classes
function init() {
  var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
  if (!touchsupport) { // browser doesn't support touch
    document.documentElement.className += "non-touch"
  }
}

//change tabs on scroll
function onScroll(event) {
  var scrollPos = $(document).scrollTop() + getValue(6.25);
  var secStep = $('.section-steps');
  $('a', secStep).each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href")+".active");
    if ($(currLink.attr("href")+".active").is(":visible") && refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
      r_c($('a', secStep));
      a_c($(currLink));
    } else {
      r_c($(currLink));
    }
    if (secStep.offset().top <= scrollPos - getValue(5)) {
      a_c(secStep);
    } else {
      r_c(secStep);
    }
  });
}

//scroll
function doScroll($this) {
  $(document).off("scroll");
  a_c($('.section-steps'));
  r_c($('a.active', $this.parent()));
  a_c($this);
  a_c($('.panels'));
  var target = $this.attr('href'),
    menu = target;
  $target = $(target);
  if(target == "#panel1"){
    a_c($('#panel1'));
  }
  if(target == "#panel2"){
    a_c($('#panel1'));
    a_c($('#panel2'));
  }
  if(target == "#panel3"){
    a_c($('#panel1'));
    a_c($('#panel2'));
    a_c($('#panel3'));
  }
  if(target == "#panel4"){
    a_c($('#panel1'));
    a_c($('#panel2'));
    a_c($('#panel3'));
    a_c($('#panel4'));
  }
  if(target == "#panel5"){
    a_c($('#panel1'));
    a_c($('#panel2'));
    a_c($('#panel3'));
    a_c($('#panel4'));
    a_c($('#panel5'));
  }
  setTimeout(function() {
    $('html, body').stop(true, true).animate({
      'scrollTop': $target.offset().top - getValue(6)
    }, 500, function() {
      $(document).on("scroll", onScroll);
    });
  }, 400);
}

function nextStep() {
  $('a.active + span + a', $('.section-steps')).trigger("click");
}

function scrolling($this,o) {
  var par = $this.parent().parent();
  var w = $('.-row .-item',par).outerWidth(true);
  $('.-row',par).stop(true,true).animate({
    scrollLeft: o + w
  });
}
