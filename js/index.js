var button = document.querySelector(".roll-dice-btn");
var heading = document.querySelector(".heading");
var diceOne = document.querySelector(".dice-one");
var diceTwo = document.querySelector(".dice-two");

button.addEventListener("click", rollDice);

function rollDice(){
    var a = Math.floor((Math.random() * 6) + 1);
    var b = Math.floor((Math.random() * 6) + 1);

    var one = "images/dice" + a + ".png";
    var two = "images/dice" + b + ".png";

    diceOne.setAttribute("src", one);
    diceTwo.setAttribute("src", two);

    if(a > b){
        heading.innerText = "Player 1 won!";
    }
    else if(a < b){
        heading.innerText = "Player 2 won!";
    }
    else{
        heading.innerText = "Draw!!";
    }
}