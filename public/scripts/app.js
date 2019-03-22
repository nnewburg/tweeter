"use strict";

$(document).ready(function() {

  $(".error-message").hide();

 $('#tweetForm').on('submit',function(e){
    $(".error-message").hide();
    e.preventDefault();
    if(Number($('.counter').html()) >= 0 && Number($('.counter').html()) !== 140){

    let data = $('#tweetForm').serialize();
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
      $( ".error-message").slideToggle();
      if(Number($('.counter').html()) < 0){
        $('.errorContent').text("You went over the character limit");
      } else {
        $('.errorContent').text("Cant send an empty Tweet");
      }
   }
  });

      function renderTweets(tweets) {
        let temp = "";
          for(let i = 0; i < tweets.length; i++){
            temp = createTweetElement(tweets[i]);
           $('#tweets-container').prepend(temp);
          }
      }

      function createTweetElement(tweet){
        let $tweet = $('<article>').addClass('tweet');
        let header = $('<header>');
        let imgContain = $('<div>').addClass("imgContainer");

        let img = $('<img>').attr({
          src: tweet.user.avatars.small,
          height: "50px",
          width: "50px",
        });

        imgContain.append(img);
        header.append(imgContain);

        let name = $('<h2>').text(tweet.user.name);
        let handle = $('<span>').text(tweet.user.handle);
        header.append(name);
        header.append(handle);
        $tweet.append(header);

        let content = $('<p>').text(tweet.content.text).addClass("tweetContent");
        $tweet.append(content);

        let foot = $('<footer>');
        let time = new Date(tweet.created_at);
        let dateStamp = $('<span>').text(time.toLocaleString());
        let flagIcon = $('<img>').addClass("tweetIcon").attr("src", "/images/flag.jpeg" );
        let retweetIcon = $('<img>').addClass("tweetIcon").attr("src", "/images/retweet.png" );
        let likeIcon = $('<img>').addClass("tweetIcon").attr("src", "/images/like.png" );
        foot.append(dateStamp);
        foot.append(flagIcon);
        foot.append(retweetIcon);
        foot.append(likeIcon);
        $tweet.append(foot);

      return $tweet;
      }


      let count = 0;

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