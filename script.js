$(document).ready(function() {
  var screenHeight = $('.screen').height();
  var move = function(direction = 1) {
    let curPosition = $('.clients-slider').position().left;
    $('.clients-slider').css('left', (curPosition + direction*100) +'px');
  };

  $('#main-menu a').click(function() {
    var id = $(this).attr('href');
    $('body').animate({scrollTop: $(id).offset().top}, 300);
  });

  $('#top-btn').click(function() {
    $('body').animate({scrollTop: 0}, 300);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > screenHeight / 2) {
      $('#top-btn').show();
    } else {
      $('#top-btn').hide();
    }
  });

  var moving;
  $('.client-slider-arrow').mouseenter(function() {
    var direction = $(this).data('direction');
    move(direction);
    moving = setInterval(function() {
      move(direction);
    }, 900);
  });

  $('.client-slider-arrow').mouseleave(function() {
    clearInterval(moving);
  });
});