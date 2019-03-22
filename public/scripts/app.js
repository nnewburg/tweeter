"use strict";

$(document).ready(function() {


//Hides the error message on load of screen
  $(".error-message").hide();
 $('#tweetForm').on('submit',function(e){
    $(".error-message").hide();
    e.preventDefault();
    let data = $('#tweetForm').serialize();


    //conditional to make sure the text area is not empty or over 140 characters
    if(Number($('.counter').html()) >= 0 && Number($('.counter').html()) !== 140){
    //make the textarea input be transfered into the /tweets route with the ajax method
     $.ajax({
          url:'/tweets',
          method: 'post',
          data: data,
          success: function(result){
            $('.counter').text(140);
            $('#newTweetTxt').val('');
           loadTweets();
          },
          error: function(err){

          }
        });
   } else{
      //if text area does not meet the if conditional prints the error statements
      $( ".error-message").slideToggle();
      if(Number($('.counter').html()) < 0){
        $('.errorContent').text("You went over the character limit");
      } else {
        $('.errorContent').text("Cant send an empty Tweet");
      }
   }
  });
      //intakes an array of tweets and calls the create tweet element function on each tweets
      //prepending them to the tweets container
      function renderTweets(tweets) {
        let temp = "";
          for(let i = 0; i < tweets.length; i++){
            temp = createTweetElement(tweets[i]);
           $('#tweets-container').prepend(temp);
          }
      }

      //function to create a DoM element that is appended to the tweets container
      function createTweetElement(tweet){

        let $tweet = $('<article>').addClass('tweet');
        let header = $('<header>').append($('<div>').addClass("imgContainer").append($('<img>').attr({
          src: tweet.user.avatars.small,
          height: "50px",
          width: "50px",
        })));
        header.append($('<h2>').text(tweet.user.name));
        header.append($('<span>').text(tweet.user.handle));
        $tweet.append(header);

        $tweet.append($('<p>').text(tweet.content.text).addClass("tweetContent"));

        let foot = $('<footer>');
        let time = new Date(tweet.created_at);
        foot.append($('<span>').text(time.toLocaleString()));
        foot.append($('<img>').addClass("tweetIcon").attr("src", "/images/flag.jpeg" ));
        foot.append($('<img>').addClass("tweetIcon").attr("src", "/images/retweet.png" ));
        foot.append($('<img>').addClass("tweetIcon").attr("src", "/images/like.png" ));
        $tweet.append(foot);

      return $tweet;
      }




      let count = 0;

      //function to load the tweets from the /tweets URL then renders them
      function loadTweets(){

        $.ajax('/tweets', { method: 'GET' })
        .then(function (tweetDB) {
        let temp = tweetDB;
        if(count === 0){
          count ++;
          renderTweets(temp);
        } else {
            while(temp.length > 1){
              temp.shift();
            }
            renderTweets(temp);
          }

         });
        }

loadTweets();

});