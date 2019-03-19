$(document).ready(function() {
  // --- our code goes here ---

  //creates an event handler when a key is pressed in the
  //text area input
  $('.tweet').hover(
    function() {
      $(this).css({"opacity":"1"});
      $(this).find(".tweetIcon").css({"display": "block"});
    },

    function() {
      $(this).css({"opacity":"0.7"});
      $(this).find(".tweetIcon").css({"display": "none"});
    }
  )
});

