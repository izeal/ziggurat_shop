$(function(){
  $('.form-select').change(function(){
    var data = this.value;
    
    $('.action-image').attr('src', 'img/' + data + '.png');
  });
});
