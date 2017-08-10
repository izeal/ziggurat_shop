$(function(){
  $('.joke').dblclick(function(){
    var data = $(this).attr('data-joke');
    
    var sound = new Audio;
    sound.src = "sounds/" + data + ".wav";
    
    sound.play();
  });
});
