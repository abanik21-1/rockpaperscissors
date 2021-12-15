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
  $(".computerChoice").text(`${computerChoiceTwo}`);
});

//[ ] Write a conditional statement which, given the number range of randomNumber, assigns ‘rock’, ‘paper’ or ‘scissors’ to a computerChoice variable
// [ ] Update the computer choice location so it displays the computerChoice to the screen


   
let randomNumber = 0;

$(".play").click(function () {
  let user = $("input").val();
  $(".userChoice"). text(user);
  let randomNumber = Math.ceil(Math.random() * 3)-1;
  $(".computerChoice").text(choices [randomNumber]);
  
});

let choices = ["rock", "paper", "scissors"];
console.log(choices [20]);

  
  //  ] Write a compound conditional statement that compares the userChoice to the computerChoice
//[ ] Declare a variable to save the winner of the game
// [ ] Display the winner to the screen in the result div

  

let winner = (userChoice, computerChoice);
$(".result").html(winner);

let winner; 

if (
  (userChoice === "rock" && computerChoice === "paper") ||
  
(userChoice === "scissors" && computerChoice === "rock") ||
  (userChoice === "paper" && computerChoice === "scissors")
) {
  winner = "Computer Wins!";
  
}else if (
  



});
