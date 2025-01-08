const playerChoice = document.getElementById("player-choice");
const pcChoice = document.getElementById("pc-choice");
const result = document.querySelector(".result");

const scoresWins = document.getElementById(`scores-wins`);
const scoresDraws = document.getElementById(`scores-draws`);
const scoresLosses = document.getElementById(`scores-losses`);

let wins = 0;
let draws = 0;
let losses = 0;

    playerChoice.style.visibility = `hidden`;
    pcChoice.style.visibility = `hidden`;

function Game(choice){
    playerChoice.style.visibility = `visible`;
    pcChoice.style.visibility = `visible`;
    const rand = Math.floor(Math.random()*3);

    let ano = choice-rand;
    if(ano === 0){
        result.textContent = `Draw!`
        draws++;
    }else if (ano === -1 || ano === 2){
        result.textContent = `You Lose!`
        losses++;
    }else{
        result.textContent = `You Win!`;
        wins++;
    }
    pcChoice.innerHTML = `<img src="Images/${rand}.png"></img>`
    playerChoice.innerHTML = `<img src="Images/P${choice}.png"></img>`
    scoresWins.innerHTML = `Wins: ${wins}`;
    scoresDraws.innerHTML = `Draws: ${draws}`;
    scoresLosses.innerHTML = `Losses: ${losses}`;
    }

function Reset(){
    wins = 0;
    draws = 0;
    losses = 0;
    result.textContent = `Pickk`
    pcChoice.innerHTML = `<img src="Images/Placeholder.png" alt="Placeholder">`
    playerChoice.innerHTML = `<img src="Images/Placeholder.png" alt="Placeholder">`
    playerChoice.style.visibility = `hidden`;
    pcChoice.style.visibility = `hidden`;
    scoresWins.innerHTML = `Wins: ${wins}`;
    scoresDraws.innerHTML = `Draws: ${draws}`;
    scoresLosses.innerHTML = `Losses: ${losses}`;
}