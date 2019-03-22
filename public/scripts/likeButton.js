$(function() {


$('.likesIcon').click( function(){
  // let numLikes = 0;
  // numLikes++;

  console.log("clickworks");
  let parentTag = $(this).parent().get(0);
  parentTag.append($('<span>').txt("numLikes"))

  });






});