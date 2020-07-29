


let _gameMatrix = [
    [0,2,1],
    [1,0,2],
    [2,1,0]
];

let _playerAction;
let _compAction;
let _playerScore=0;
let _oppScore = 0;
let _round = 1;
let t;
let _gameKey = {'rock':0, 'paper':1, 'scissors':2};
let _reverseGameKey = ["rock", "paper", "scissors"];
let _resultKey = ["It's a draw.", "You won this round, Congrats!", "You lose this round, sorry"];


function computerPlay() {
    _compAction = Math.round(Math.random() * 2);
    
    const oppStatus = document.querySelector('#opponent-status');
    oppStatus.textContent = "Opponent has chosen!";

    const oppChoice = document.querySelector('#opponent-choice');
    oppChoice.textContent = "";
    
}

function incrementScore(score) {
    
    if (score === 1) {
        _playerScore++;
        const playerScore = document.querySelector('#player-score');
        playerScore.textContent = `${_playerScore}/3`;

    }

    else if (score === 2) {
        _oppScore++;
        const oppScore = document.querySelector('#opp-score');
        oppScore.textContent = `${_oppScore}/3`;
    }
}

function gameOver() {
    if (_playerScore === 3) {
        const result = document.querySelector('#result');
        result.textContent = "You Won the Game!";
        window.clearTimeout(t);
        console.log("You Won the Game!")
    }

    if (_oppScore === 3) {
        const result = document.querySelector('#result');
        result.textContent = "You Lost the Game!";
        window.clearTimeout(t);
        console.log("You Lost the Game!");
    }

    
}

function displayChoice(choice) {
    const playerChoice = document.querySelector('#player-choice');
    playerChoice.textContent = choice;

    const oppChoice = document.querySelector('#opponent-choice');
    oppChoice.textContent = _reverseGameKey[_compAction];

    const result = document.querySelector('#result');
    result.textContent = _resultKey[_gameMatrix[_playerAction][_compAction]]; 

    const oppStatus = document.querySelector('#opponent-status');
    oppStatus.textContent = "Opponent is choosing...";

    
    const round = document.querySelector('#round');
    round.textContent= `Round ${_round++}`;
}

function playRound(choice) {
    
    _playerAction = _gameKey[choice];

    displayChoice(choice);
    
    incrementScore(_gameMatrix[_playerAction][_compAction]);

    t = window.setTimeout(computerPlay, 3000);

    gameOver();

}


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', e => playRound('rock'));

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', e => playRound('paper'));

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', e => playRound('scissors'));

t = window.setTimeout(computerPlay, 3000);







