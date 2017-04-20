$(document).ready(function() {
  var screenHeight = $('.screen').height();
  var move = function(direction = 1) {
    let slider = $('.clients-slider');
    let curPosition = slider.position().left;
    let newPosition = curPosition + direction*100;
    console.log($(window).width() - slider.width());
    if (direction > 0 && newPosition > 0)
      newPosition = 0
    else if (direction < 0 && newPosition < $(window).width() - slider.width())
      newPosition = $(window).width() - slider.width();

    slider.css('left', newPosition +'px');
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
    let curPosition = $('.clients-slider').position().left;
    move(direction);
    moving = setInterval(function() {
      move(direction);
    }, 900);
  });

  $('.client-slider-arrow').mouseleave(function() {
    clearInterval(moving);
  });

  $('.clients-slider img').click(function() {
    $('.clients-slider img').removeClass('current');
    $(this).addClass('current');
    $('#imageModal img').attr('src', this.src);
    $('#imageModal').modal();
  });

  $('.modalArrow').click(function() {
    let newImg;
    let currentImg = $('.clients-slider .current');
    if ($(this).data('direction') > 0)
      newImg = currentImg.next('img');
    else
      newImg = currentImg.prev('img');

    if (newImg.length) {
      currentImg.removeClass('current');
      newImg.addClass('current');
    } else
      return;

    $('#imageModal img').attr('src', newImg.attr('src'));
  });
});