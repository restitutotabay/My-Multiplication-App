const num1 = Math.ceil(Math.random()*11);
const num2 = Math.ceil(Math.random()*11);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const resetEl = document.getElementById("reset");
const mistakeEl = document.getElementById("mistake");
const timerEl = document.getElementById("timer");
const startButton = document.getElementById("start");

let seconds = 60;
let score = JSON.parse(localStorage.getItem("score"));
let mistake = JSON.parse(localStorage.getItem("mistake"));

scoreEl.innerText = `Correct: ${score}`;
mistakeEl.innerText = `Mistake: ${mistake}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

if(mistake <= 0){
    mistake = 0;
}

const correctAns = num1 * num2;

formEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value;

    if(userAns === correctAns){
        score++;
    }
    else{
        mistake++;
        inputEl.style.border = "5px solid red";
    }

        updateLocalStorage();

});

resetEl.addEventListener("click", () =>{
    localStorage.removeItem("score");
    localStorage.removeItem("mistake");
    score = 0;
    mistake = 0;
    updateLocalStorage();
    scoreEl.innerText = `Correct: ${score}`;
    mistakeEl.innerText = `Mistake: ${mistake}`;
});


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("mistake", JSON.stringify(mistake));
};



