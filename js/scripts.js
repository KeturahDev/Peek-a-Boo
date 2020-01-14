$(document).ready(function() {
  $(".clickable").click(function() {
    $(".intentionally-showing").toggle();
    $(".intentionally-hidden").toggle();
  });
  $(".clickable").click(function() {
    
    $("#fadein-showing").fadeToggle(); 
    $("#fadein-hidden").fadeToggle();

  });
  $(".clickable").click(function() {
    
    $("#slidin-showing").slideToggle(); 
    $("#slidout-hidden").slideToggle();

  });
    
});
