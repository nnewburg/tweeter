$(document).ready(function() {

      const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



renderTweets(data);



      function renderTweets(tweets) {
        let temp = ""
          for(let i = 0; i < tweets.length; i++){
            temp = createTweetElement(tweets[i]);
           $('#tweets-container').append(temp);
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
        })

        imgContain.append(img)
        header.append(imgContain)

        let name = $('<h2>').text(tweet.user.name)
        let handle = $('<span>').text(tweet.user.handle)
        header.append(name)
        header.append(handle)
        $tweet.append(header)

        let content = $('<p>').text(tweet.content.text).addClass("tweetContent");
        $tweet.append(content);

        let foot = $('<footer>')
        let dateStamp = $('<span>').text(tweet.created_at)
        let flagIcon = $('<img>').addClass("tweetIcon").attr("src", "/images/flag.jpeg" )
        let retweetIcon = $('<img>').addClass("tweetIcon").attr("src", "/images/retweet.png" )
        let likeIcon = $('<img>').addClass("tweetIcon").attr("src", "/images/like.png" )
        foot.append(dateStamp)
        foot.append(flagIcon)
        foot.append(retweetIcon)
        foot.append(likeIcon)
        $tweet.append(foot)

      return $tweet;
      }


});