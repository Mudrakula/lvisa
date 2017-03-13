$(document).ready(function() {
  var screenHeight = $('.screen').height();
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
});