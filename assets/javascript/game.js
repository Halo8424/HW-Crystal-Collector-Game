$(document).ready(function () {
  // toggle hide and show for instructions btn
  $("#instructions").on("click", function () {
    // console.log("clicked");
    $("#rules-area").toggle(3000);
  });

  // Crystal Variables
  var crystal = {
    blue: {
      name: "Blue",
      value: 0,
    },
    green: {
      name: "Green",
      value: 0,
    },
    red: {
      name: "Red",
      value: 0,
    },
    yellow: {
      name: "Yellow",
      value: 0,
    },
  };

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

  var startGame = function () {
    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);
    console.log(targetScore);
  };

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  startGame();
});
