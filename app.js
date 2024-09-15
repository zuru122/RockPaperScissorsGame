const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let  userChoice;
let result;


const getChoice = document.querySelectorAll("button")
getChoice.forEach(choice => choice.addEventListener("click", (e)=>{
    userChoice = e.target.id;
    let element = document.getElementById(userChoice);
    let text = element.textContent;
    userChoiceDisplay.innerHTML = text;

    generateComputerChoice();
    getResult();

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

    computerChoiceDisplay.innerHTML = computerChoice;


}

function getResult(){
    if(computerChoice === userChoice){
        result = `its a draw`
    }

    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You win!'
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'you lost!'
    }

    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'you win!'
    }

    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'you lost!'
    }

    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'you win!'
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'you lost!'
    }

    resultDisplay.innerHTML = result;
}