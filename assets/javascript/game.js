$(document).ready(function(){
// toggle hide and show for instructions btn
    $("#instructions").on("click",function(){
        // console.log("clicked");
        $("#rules-area").toggle(3000);
    });
 // Generates the random "target number" we will try to reach.
    const randomNum = randomNumGen();

 // Starting variables.
 let wins = 0;
 let losses = 0;
 let crystals;


 
});