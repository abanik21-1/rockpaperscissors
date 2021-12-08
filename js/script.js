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


   
let computerChoice = Math.random(); 
let computerChoiceString;

if () {
  computerChoiceString = "rock";
} else if () {
  computerChoiceString = "paper";
} else {
   computerChoiceString = "scissor";
}

if (userChoice === "rock") {
  if (computerChoiceString === "rock") {
    //it's a tie
  
}

    $(".play").click(function() {
    let computerAnswer = Math.random();
    console.log(userAnswer);
  let rock = rock;
    
    
      
$(".play").click(function() {
    let userAnswer = Math.random();
    console.log(userAnswer);
  let rock = ; 
  let paper = ;
  let scissor = ;
  if (userAnswer === 1) {
  }
    
  });
  
  
  