$(function() {                            //First of all we need to make a new function
  $('.fadein img:gt(0)').hide();          //Then we need to start with hiding all images except the first one.
  setInterval(function() {                //Now we set up an interval to cycle through the images every few seconds or so
      $('.fadein :first-child').fadeOut() //To start off we need the first image to face out
        .next('img').fadeIn()             //Then we want the next image in the cycle to fade in
        .end().appendTo('.fadein');       //Following that we need to take the first image and place it at the back of the cycle once again
    },
    3000);                                //Finally, this is where we set how long we want the transition to last between images.
});

/* ------------------------------------------ */

$(function() {
  $('.fadein1 img:gt(0)').hide();
  setInterval(function() {
      $('.fadein1 :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.fadein1');
    },
    3000);
});

/* ------------------------------------------ */

$(function() {
  $('.fadein2 img:gt(0)').hide();
  setInterval(function() {
      $('.fadein2 :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.fadein2');
    },
    3000);
});