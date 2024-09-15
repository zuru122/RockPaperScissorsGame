const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const main  = document.querySelector("main");
const  nav = document.querySelector("nav");
const winner = document.querySelector(".winner");
const  startGame = document.querySelector(".opening-message");



let  userChoice;
let result;
const score = {
    user:  0,
    comp: 0,
};


const getChoice = document.querySelectorAll(".btn")
getChoice.forEach(choice => choice.addEventListener("click", (e)=>{
    userChoice = e.target.id;
    // let element = document.getElementById(userChoice);
    // let text = element.textContent;
    userChoiceDisplay.innerHTML = userChoice;
    if (userChoice === 'Rock'){
        userChoiceDisplay.innerHTML = '<img src="img/Rock.png" alt="rock" width="100px">';

    }
    else if (userChoice === 'Paper'){
        userChoiceDisplay.innerHTML = '<img src="img/Paper.png" alt="paper" width="100px">';

    }

      else if (userChoice === 'Scissors'){
        userChoiceDisplay.innerHTML = '<img src="img/Scissors.png" alt="scissors" width="100px">';

    }

    console.log(userChoice);
    generateComputerChoice();
    getResult();
    checkForGameEnd()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    console.log(randomNumber);

    if(randomNumber === 1){
        computerChoice = 'Rock';
    }
    if(randomNumber === 2){
        computerChoice = 'Scissors';
    }
    if(randomNumber === 3){
        computerChoice = 'Paper';
    }

    computerChoiceDisplay.innerHTML = `<img src="img/${computerChoice}.png" alt="scissors" width="100px">`

    // computerChoiceDisplay.innerHTML = computerChoice;


}

function getResult(){
    if(computerChoice === userChoice){
        result = `its a draw`
    }

    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You win!';
        score.user++;
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'you lost!';
        score.comp++;
    }

    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'you win!';
        score.user++;
    }

    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'you lost!';
        score.comp++;
    }

    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'you win!';
        score.user++;
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'you lost!';
        score.comp++;
    }

    resultDisplay.innerHTML = result;
     document.getElementById("user").innerHTML = `${score.user}`
    document.getElementById("comp").innerHTML = `${score.comp}`
}

// Check Game end
function checkForGameEnd(){
    const winnerDisplay = document.querySelector(".winner-message")

    if(score.user === 10){
        winner.style.display = "flex";
        winnerDisplay.innerHTML = "🎊🎉 you WON the Game"
        
    }
    else if (score.comp === 10){
        winner.style.display = "flex";
        winnerDisplay.innerHTML = "😰 OPPS You LOST!"
    }
}


const reset= document.querySelector(".restart")
reset.addEventListener("click", ()=>{
    console.log("Reset button clicked");
    main.style.display = "flex";
    nav.style.display =  "flex";
    winner.style.display = "none";
    user.innerHTML = 0;
    comp.innerHTML = 0;
    score.user = 0;
    score.comp = 0;
    resultDisplay.innerHTML = "RESULT";
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML  = "";
})


const start = document.querySelector(".btn-next")
start.addEventListener("click", ()=>{
    main.style.display = "flex";
    nav.style.display =  "flex";
    startGame.style.display = "none";

})