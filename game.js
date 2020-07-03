const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");


let currentQuestion = {};
let acceptingAnswers = false;
let score =0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What house does Harry belong to?",
        choice1: "Gryffindor",
        choice2: "Slytherin", 
        choice3: "Hufflepuff",
        choice4: "Ravenclaw",
        answer: 1,
    },
    {
        question: "Who does Harry take to the Yule Ball?",
        choice1: "Choe Chang",
        choice2: "Parvati Patel", 
        choice3: "Ginny Weasley",
        choice4: "Hermione Weasley",
        answer: 2,
    },
    {
        question: "Who sent Harry Love Potion?",
        choice1: "Ginny Weasley",
        choice2: "Parvati Patel", 
        choice3: "Romelda Vein",
        choice4: "Moaning Myrtle",
        answer: 3,
    },
    {
        question: "Who betrayed James and Lily Potter ?",
        choice1: "Peter Pettigrew",
        choice2: "Sirius Black", 
        choice3: "Remus Lupin",
        choice4: "Severus Snape",
        answer: 1,
    },
    {
        question: "Where is the Room of Requirement?",
        choice1: "On the Third Floor of Hogwarts",
        choice2: "In the Dungeons", 
        choice3: "The Forbidden Forest",
        choice4: "If you have to ask, you'll never know, If you know,you need only ask.",
        answer: 4,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }

    selectedChoice.parentElement.classList.add(classToApply);
        
    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };

startGame();