// Day 1 & 2: Random Numbers & conditional statement 
$(".play").click(function() {
  let choice = $(".input").val();
  $(".userChoice").text(choice);
  
  //set up variables for later 
  let computerChoiceTwo = Math.random();
  $(".computerChoice").text(`${computerChoiceTwo}`);
  
   let user = $("input").val();
  $(".userChoice"). text(user);
  let randomNumber = Math.ceil(Math.random() * 3)-1;
  $(".computerChoice").text(choices [randomNumber]);
});


//Get computer choice 
let choices = ["rock", "paper", "scissors"];
console.log(choices [20]);

let computerChoice = "No choice";
if (randomNumber <= 1) {
  computerChoice = "Rock";
} else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";


// set computer choice 
} $(".computerChoice").text(computerChoice);




let rockW = choice === "Rock" && computerChoice === "Scissors";
let paperW = choice === "Paper" && computerChoice === "Rock";
let scissorsW = choice === "Scissors" && computerChoice === "Paper";
let userW = rockW || paperW || scissorsW;



let result = "";
if (choice === computerChoice) {
  result = "Tie";
} else if (userW) {
  result = "You Win!!";
} else {
  result = "You lose. Try again!";
}
  

$(".result").text(result);             
      

//Day 6: Parameter vs. Argument
function chooseWinner () {
  return 
  });

