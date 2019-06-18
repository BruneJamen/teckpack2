
$(document ).ready(function(){
  alert("Bienvenue");

  $( "p" ).on( "click", function() {  
if ($(this).hasClass("red")) {
  $(this).removeClass()
  }
  else {
    $(this).addClass("red")
 }
 $(this).html("HELLO");
});
});