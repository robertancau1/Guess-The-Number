let score = 20;
let highscore = 0;
let theNumber = RandomNumber();

function RandomNumber() {
    let randNr = Math.trunc(Math.random() * 20) + 1;
    return randNr;
}

function CheckNumberError(value,nr) {
    if (Number(value) < nr) {
        document.querySelector(".message").innerText = `Too low...`;
    } else if (Number(value) > nr) {
        document.querySelector(".message").innerText = `Too high...`;
    }
    document.querySelector(".score").innerText = score;
}

function CheckHighScore(score) {
    if (score >= highscore) {
        highscore = score;
    }
    return highscore;
}

function Reset() {
    score = 20;
    theNumber = RandomNumber();
    document.querySelector(".score").innerText = score;
    document.querySelector(".message").innerText = `Start guessing...`;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor =  `#222`;
}

function InputCheck (RandomNr) {
    const inputValue = document.querySelector(".guess").value;
    const number = RandomNr;
    if (number === Number(inputValue)) {
        document.querySelector(".message").innerText = `You guessed it!`;
        document.body.style.backgroundColor = "green";
        document.querySelector(".highscore").innerText = CheckHighScore(score);
        setTimeout(Reset,2000);
    } else {
        score--;
        CheckNumberError(inputValue,number);
        if (score === 0) {
            document.body.style.backgroundColor =  `red`;
            document.querySelector(".message").innerText = `You lost..`;
            setTimeout(Reset,2000);
        }
    }
}

document.querySelector('.check').addEventListener('click',function () {
    InputCheck(theNumber);
});

document.querySelector(".again").addEventListener('click',function () {
    Reset();
});