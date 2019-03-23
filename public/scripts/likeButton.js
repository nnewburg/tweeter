$(function() {


$('#tweets-container').on("click", ".likesIcon", function(){
  // let numLikes = 0;
  // numLikes++;


  let parentTag = $(this).parent().get(0);
  let grandparent = $(parentTag).parent().get(0);
  let counter = $(parentTag).find(".likescount")
  let heart = $(parentTag).find(".likesIcon")

  if($(counter).text() !== "1"){
    $(counter).text("1")
    $(heart).attr("src", "/images/Beating_Heart.gif")
  } else {
    $(counter).text("")
    $(heart).attr("src", "/images/like.png")
  }

  let data = {
    "id": $(grandparent).attr("id")
  }

    $.ajax({
          url:'/tweets/like',
          method: 'post',
          data: data,
          success: function(result){
            console.log(data)
          },
          error: function(err){

          }
        });

  });




});