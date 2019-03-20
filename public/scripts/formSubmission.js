$(function() {

  $('#tweetForm').on('submit',function(e){

    e.preventDefault();
    if(Number($('.counter').html()) >= 0 && Number($('.counter').html()) !== 140){
    let data = $('#tweetForm').serialize();

     $.ajax({
          url:'/tweets',
          method: 'post',
          data: data,
          success: function(result){

          },
          error: function(err){

          }
        })
   } else{
      alert("tweet too long or too empty")
   }
  });
});

    //     var $button = $('input');
    //         $button.on('click', function (e) {
    //           e.preventDefault();
    // console.log('Button clicked, performing ajax call...');
    // console.log($('#tweetForm').serialize());

    //         $.ajax({
    //       url:'/tweets',
    //       method: 'post',
    //       data: data,
    //       success: function(result){

    //       },
    //       error: function(err){

    //       }
    //     })
    //   });




//   $.ajax({
//     url:'/tweets',
//     method: 'post',
//     data: data,
//     success: function(result){

//     },
//     error: function(err){

//     }
//   })
// });

// $.ajax('/tweets', { method: 'POST' })
//       .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);