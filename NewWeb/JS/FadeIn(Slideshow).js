$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

/* ------------------------------------------ */ 

$(function(){
    $('.fadein1 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein1 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein1');}, 
      3000);
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn1(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

/* ------------------------------------------ */ 

$(function(){
    $('.fadein2 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein2 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein2');}, 
      3000);
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn2(1000)
    .end()
    .appendTo('#slideshow');
},  3000);