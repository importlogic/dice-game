var button = document.querySelector(".roll-dice-btn");
var heading = document.querySelector(".heading");
var diceOne = document.querySelector(".dice-one");
var diceTwo = document.querySelector(".dice-two");

button.addEventListener("click", rollDice);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function rollDice(){
    button.setAttribute("disabled", "");
    button.setAttribute("aria-disabled", "true");

    diceOne.setAttribute("src", "https://c.tenor.com/i_L5KauoCcoAAAAi/dice.gif");
    diceTwo.setAttribute("src", "https://c.tenor.com/i_L5KauoCcoAAAAi/dice.gif");

    var a = Math.floor((Math.random() * 6) + 1);
    var b = Math.floor((Math.random() * 6) + 1);

    var one = "images/dice" + a + ".png";
    var two = "images/dice" + b + ".png";

    await sleep(1000);
    diceOne.setAttribute("src", one);
    await sleep(700);
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

    button.removeAttribute("disabled");
    button.removeAttribute("aria-disabled");
}