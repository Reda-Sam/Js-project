
const computerChoise = document.getElementById("computer-choice");
const yourChoise = document.getElementById("your-choice");
const resultGame = document.getElementById("result");
const playAgainButton = document.getElementById('play-again');
let btn = document.querySelectorAll("button");
let user;
let computer;
let result;
btn.forEach((btns)=> {
    btns.addEventListener("click", (e) => {
        if(e.target.id === "rock"){
            user = "✊"
        }
        if(e.target.id === "paper"){
            user = "✋"
        }
        if(e.target.id === "scissors"){
            user = "✌"
        }
        yourChoise.innerHTML = user;
        getRandom()
        getResult();
        setTimeout(() => {
            location.reload();
    }, 2000); 
    })
})
function getRandom() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        computer = "✊"
    }
    if(randomNumber === 2){
        computer = "✋"
    }
    if(randomNumber === 3){
        computer = "✌"
    }
    computerChoise.innerHTML = computer;
}
function getResult(){
    if(computer === user){
        result = "it's a draw"
    }
    if(computer === "✊" && user === "✋"){
        result = "you win"
    }
    if(computer === "✊" && user === "✌"){
        result = "you lose"
    }
    if(computer === "✋" && user === "✌"){
        result = "you win"
    }
    if(computer === "✋" && user === "✊"){
        result = "you lose"
    }
    if(computer === "✌" && user === "✊"){
        result = "you win"
    }
    if(computer === "✌" && user === "✋"){
        result = "you lose"
    }
    if (result === "you win") {
        resultGame.innerHTML = result;
        resultGame.classList.add("happy");
    } else if (result === "you lose") {
        resultGame.innerHTML = result;
        resultGame.classList.add("sad");
    } else {
        resultGame.innerHTML = result;
    }  
    }


playAgainButton.addEventListener('click', () => {
    computerChoise.textContent = '';
    yourChoise.textContent = '';
    resultGame.textContent = '';
});