$(document).ready(function(){
       $("div.demo").scrollTop( 200 );

       $("div.demo").mouseclick(function () {
          var top = $("div.demo").scrollTop();
          $("#result").html("top offset: <span>" + 
                        top + "</span>.");