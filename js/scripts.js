$(document).ready(function() {
  $(".clickable").click(function() {
    $(".intentionally-showing").toggle();
    $(".intentionally-hidden").toggle();
  });
  $(".clickable").click(function() {
    
    $("#fadein-showing").toggle(); 
    $("#fadein-hidden").toggle();
  })
    
});
