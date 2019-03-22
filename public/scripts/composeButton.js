$(function() {

  let clicked = false;

$( ".new-tweet" ).hide()

  $('.composeBtn').click( function(){

    if(!clicked){
      $(this).css("opacity", "0.6")
      clicked = true;
    } else {
      $(this).css("opacity", "1")
      clicked = false;
    }
    console.log("click worked");

     $( ".new-tweet" ).slideToggle()
    // Animation complete.
    $("#newTweetTxt").focus();

  });

  $( ".composeBtn" ).hover(

  function() {
    if(!clicked){
      $(this).css("opacity", "0.6")
    }

  }, function() {
    if(!clicked){
      $(this).css("opacity", "1")
    }
  }
);

   $( ".login" ).hover(

  function() {
      $(this).css("opacity", "0.6")

  }, function() {
    $(this).css("opacity", "1")
  }
)

});


