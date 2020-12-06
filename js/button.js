$(function(){
  $('.button-order').click(function(){
   var data = $(this).attr('data-order');

   $('.action-image').attr('src', 'img/' + data + '.png');
   $('.form-select').val(data).prop('selected', true);
  });

  $('.button-link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 90)
    }, 500);
    return false;
  });
});
