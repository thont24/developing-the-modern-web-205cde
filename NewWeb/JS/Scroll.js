//This was a script i was working on in order for the page to scroll back through to the top when at the bottom of the page.

$(document).ready(function() { //Set up the function
            $("div.demo").scrollTop(200); //Make it scrol to the top over 2 seconds

            $("div.demo").mouseclick(function() { //When the mouse clicks the navigation bar load this script and make it scroll back to the top. As the nav bar is always on top of everything.
                        var top = $("div.demo").scrollTop();
                        $("#result").html("top offset: <span>" +
                            top + "</span>.");