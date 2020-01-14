$(document).ready(function() {
  $(".clickable").click(function() {
    $(".intentionally-showing").toggle();
    $(".intentionally-hidden").toggle();    
  });
});
