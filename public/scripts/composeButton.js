$(function() {

  //set a boolean for the button being clicked
  let clicked = false;
  //hide the compose tweet window on load
  $( ".new-tweet" ).hide();

//jquery event for the compose button being clicked
//if the button isnt clicked its opacity changes to more transparent
//if it is clicked the button returns to full opacity
//toggles the new tweet window and focuses on the text area box
  $('.composeBtn').click( function(){

    if(!clicked){
      $(this).css("opacity", "0.6");
      clicked = true;
    } else {
      $(this).css("opacity", "1");
      clicked = false;
    }

     $( ".new-tweet" ).slideToggle()
    $("#newTweetTxt").focus();

  });

//jquery hover function for changing the opacity
//if it is clicked it has no effect
  $( ".composeBtn" ).hover(
    function() {
      if(!clicked){
        $(this).css("opacity", "0.6");
      }
    },
     function() {
      if(!clicked){
        $(this).css("opacity", "1");
      }
    }
  );

//jquery event for highlighting the login button on hover
   $( ".login" ).hover(
    function() {
      $(this).css("opacity", "0.6");
    }, function() {
      $(this).css("opacity", "1");
    }
   );

});


