$(function() {
  //init
  init();

  //start
  $('.start').click(function(e) {
    e.preventDefault();
    a_c($('.wrapper'));
  });

  //next Section
  $('.next-click a.-next').on('click', function(e) {
    e.preventDefault();
    nextStep();
  });

  //scroll Event
  $(document).on("scroll", onScroll);

  //scroll Event
  $(document).on("scroll", onScroll);

  $('.section-steps .-bottom a').on('click', function(e) {
    e.preventDefault();
    if (!$('.section-steps').is('.disabled')) {
      doScroll($(this));
      r_c($('.section-steps .-bottom'))
    }
  });
  $('.next-click.-init a').on('click', function(e) {
    $(this).parent().hide();
    $('.section-steps').removeClass("disabled");
    e.preventDefault();
    doScroll($(this));
  });

  //scroll
  $('.panels .simple-cards button').click(function(e) {
    e.preventDefault();
    scrolling($(this), $(this).data("scroll"));
  });

  //scroll

  $('.panels .simple-cards').each(function() {
    var $this = $(this);
    $this.swipe({
      allowPageScroll: "vertical",
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        var $this = $('button', $this);
        var op;
        console.log(direction);
        if (direction == "left") {
          op = "+=";
        } else {
          op = "-=";
        }
        scrolling($this, op);
      }
    });
  });

  $('.section-steps .-menu span').click(function() {
    t_c($('.section-steps .-bottom'))
  })

//lightbox
$('.lightbox-trigger').click(function(e) {
  e.preventDefault();
  a_c($('.lightbox-wrapper'));
}); $('.lightbox-wrapper, .lightbox-wrapper button').click(function(e) {
  e.preventDefault();
  r_c($('.lightbox-wrapper'));
});
});
