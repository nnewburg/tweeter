$(document).ready(function() {
  // --- our code goes here ---

  //creates an event handler when a key is pressed in the
  //text area input
  $('#newTweetTxt').keyup(function(){
    //creates a variable set to the parent element which is the form
      let parentTag = $( this ).parent().get( 0 );
      //creates a variable named counter which is the counter element
      let counter = $(parentTag).children("span");
      //an if conditional that sets the color to red if the number of
      //characters in the text area input is greater than 140, sets
      //it back to the body color if its lower than 140
      if(this.value.length > 140){
        $(counter).css("color", "red");
      } else if(this.value.length <= 140){
          $(counter).css("color", "#244751");
      }
      //changes the counter's text to the remaining characters available
     $(counter).text(140 - this.value.length);
  });
});
