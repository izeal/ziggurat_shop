$(function(){
  $('.header-nav-link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 90)
    }, 500);
    return false;
  });
});
