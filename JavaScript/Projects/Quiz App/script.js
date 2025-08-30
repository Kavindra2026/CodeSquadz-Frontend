const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");

// Make an array of objects that stores question, choices of question and answer
const quiz = [
  {
    question: "Q1. Which of the following is not a CSS box model property?",
    choices: [
      "(a). margin",
      "(b). padding",
      "(c). border-radius",
      "(d). border-collapse",
    ],
    answer: "(d). border-collapse",
  },
  {
    question:
      "Q2. Which of the following is not a valid way to declare a function in JavaScript?",
    choices: [
      "(a). function myFunction() {}",
      "(b). let myFunction = function() {};",
      "(c). myFunction: function() {}",
      "(d). const myFunction = () => {};",
    ],
    answer: "(c). myFunction: function() {}",
  },
  {
    question: "Q3. Which of the following is not a JavaScript data type?",
    choices: ["(a). string", "(b). boolean", "(c). object", "(d). float"],
    answer: "(d). float",
  },
  {
    question: "Q4. What is the purpose of the this keyword in JavaScript?",
    choices: [
      "(a). It refers to the current function.",
      "(b). It refers to the current object.",
      "(c). It refers to the parent object.",
      "(d). It is used for comments.",
    ],
    answer: "(b). It refers to the current object.",
  },
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 30;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
  const questionDetails = quiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;

  choicesBox.textContent = "";
  for (let i = 0; i < questionDetails.choices.length; i++) {
    const currentChoice = questionDetails.choices[i];
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add("choice");
    choicesBox.appendChild(choiceDiv);

    choiceDiv.addEventListener("click", () => {
      if (choiceDiv.classList.contains("selected")) {
        choiceDiv.classList.remove("selected");
      } else {
        choiceDiv.classList.add("selected");
      }
    });
  }

  if (currentQuestionIndex < quiz.length) {
    startTimer();
  }
};

// Function to check answers
const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
    // alert("Correct Answer!");
    displayAlert("Correct Answer!");
    score++;
  } else {
    // alert("Wrong answer");
    displayAlert(
      `Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`
    );
  }
  timeLeft = 30;
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestions();
  } else {
    stopTimer();
    showScore();
  }
};

// Function to show score
const showScore = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
  displayAlert("You have completed this quiz!");
  nextBtn.textContent = "Play Again";
  quizOver = true;
  timer.style.display = "none";
};

// Function to Show Alert
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

// Function to Start Timer
const startTimer = () => {
  clearInterval(timerID); // Check for any exist timers
  timer.textContent = timeLeft;

  const countDown = () => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      const confirmUser = confirm(
        "Time Up!!! Do you want to play the quiz again"
      );
      if (confirmUser) {
        timeLeft = 30;
        startQuiz();
      } else {
        startBtn.style.display = "block";
        container.style.display = "none";
        return;
      }
    }
  };
  timerID = setInterval(countDown, 1000);
};

// Function to Stop Timer
const stopTimer = () => {
  clearInterval(timerID);
};

// Function to shuffle question
const shuffleQuestions = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  currentQuestionIndex = 0;
  showQuestions();
};

// Function to Start Quiz
const startQuiz = () => {
  timeLeft = 30;
  timer.style.display = "flex";
  shuffleQuestions();
};

// Adding Event Listener to Start Button
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  startQuiz();
});

nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent === "Next") {
    // alert("Select your answer");
    displayAlert("Select your answer");
    return;
  }
  if (quizOver) {
    nextBtn.textContent = "Next";
    scoreCard.textContent = "";
    currentQuestionIndex = 0;
    quizOver = false;
    score = 0;
    startQuiz();
  } else {
    checkAnswer();
  }
});
