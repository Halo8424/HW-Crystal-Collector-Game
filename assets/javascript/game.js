$(document).ready(function () {
  // toggle hide and show for instructions btn
  $("#instructions").on("click", function () {
    // console.log("clicked");
    $("#rules-area").toggle(3000);
  });


 

  // Scores (Current and Target)
  var currentScore = 0;
  var targetScore = 0;

  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;

  // Functions
  // Helper Function for getting random numbers
  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let crystalsGenerateRandomNum = function(){
      let blueNum = getRandom(1,12);
      let greenNum = getRandom(1,12);
      let yellowNum = getRandom(1,12);
      let redNum = getRandom(1,12);

      $("#blue").value(blueNum);
      $("#green").value(greenNum);
      $("#yellow").value(yellowNum);
      $("#red").value(redNum);
  };

  var startGame = function () {
    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);
    console.log(targetScore);
    $("#targetScore").append(targetScore);

  // Add Random Values to Crystals
  crystalsGenerateRandomNum();  


  };

  // click event
  $(".crystal").on("click", function(){
      console.log("clicked");
  });

  startGame();
});
