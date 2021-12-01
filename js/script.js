//Day 2 Goal 1: Generate a new random number every time the user clicks the button

//[ ] Outside of your click handler, declare a randomNumber variable and set it equal to 0
//[ ] In your click handler, generate a random number and assign it to the randomNumber variable

//Day 2 Goal 2: Display the random number to the screen
//[ ] Display the randomNumber value on the screen, in the computer choice location

$(".play").click(function() {
  let choice = $(".input").val();
  $(".userChoice").text(choice);
});


//Random Numbers 


$(".play").click(function() {
    let computerChoiceTwo = Math.random();
  computerChoiceTwo =
    $(".computerChoice").text(`${computerChoiceTwo}`);
});