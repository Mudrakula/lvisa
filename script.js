$(document).ready(function() {
  $('#main-menu a').click(function() {
    var id = $(this).attr('href');
    $('body').animate({scrollTop: $(id).offset().top}, 300);
  });

  $('#top-btn').click(function() {
    $('body').animate({scrollTop: 0}, 300);
  });
});