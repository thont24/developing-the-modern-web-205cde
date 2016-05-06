sliderInt = 1;
sliderNext = 2;

$(document).ready(function() { //Set up the functiom
    $("#slider > img#1").fadeIn(500); //Make the first image fade in
    startSlider(); //Initialise slider 
});

function startSlider() { //Start the slider process
    count = $("#slider > img").size(); //Make the slider cycle through the images and set the interval to 6 seconds, after than transition to the next one and repeat.

    loop = setInterval(function() {

        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }

        $("#slider > img");
        $("#slider > img#" + sliderNext);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 6000)
}


function prev() { //Function for the previous button at the bottom of the slider
    newSlide = sliderInt - 1;
    showSlide(newSlide);
}

function next() { //Function for the next button at the bottom of the slider
    newSlide = sliderInt + 1;
    showSlide(newSlide);
}

function stopLoop() { //Stop the loop
    window.clearInterval(loop);
}

function showSlide(id) {
    stopLoop();
    if (id > count) {
        id = 1;
    }
    else if (id < 1) {
        id = count;
    }

    $("#slider > img");
    $("#slider > img#" + id);

    sliderInt = id;
    sliderNext = id + 1;
    startSlider();
}

$("slider > img").hover(
    function() {
        stopLoop();
    },

    function() {
        startSlider();
    }
);
