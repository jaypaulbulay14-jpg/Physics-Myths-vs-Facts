// Dark Mode Toggle
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Toggle Myth Truth
function toggleTruth(card) {
  const truth = card.querySelector('.truth');
  if (truth) truth.style.display = truth.style.display === 'block' ? 'none' : 'block';
}

// Show Formula
function showFormula(formula) {
  alert("Physics Formula:\n" + formula);
}

// Quiz Data
const quizData = [
  { question: "Gravity exists in space.", answer: true },
  { question: "Heavier objects fall faster than lighter ones.", answer: false },
  { question: "Seatbelts are useless at low speed.", answer: false },
  { question: "Sound can travel through vacuum.", answer: false },
  { question: "Rockets need air to move.", answer: false }
];

let currentQuestion = 0;
let score = 0;

const quizQuestion = document.getElementById("quiz-question");
const quizFeedback = document.getElementById("quiz-feedback");
const quizScore = document.getElementById("quiz-score");

function showQuestion() {
  quizQuestion.textContent = quizData[currentQuestion].question;
  quizFeedback.textContent = "";
  quizScore.textContent = `Score: ${score} / ${quizData.length}`;
}

// Check Quiz Answer
function checkAnswer(userAnswer) {
  const correct = quizData[currentQuestion].answer;

  if(userAnswer === correct) {
    score++;
    quizFeedback.textContent = "✅ Correct!";
    quizFeedback.style.color = "green";
  } else {
    quizFeedback.textContent = "❌ Incorrect!";
    quizFeedback.style.color = "red";
  }

  currentQuestion++;

  setTimeout(() => {
    if(currentQuestion < quizData.length) {
      showQuestion();
    } else {
      quizQuestion.textContent = "🎉 Quiz Completed!";
      quizFeedback.textContent = "";
      quizScore.textContent = `Your final score: ${score} / ${quizData.length}`;
    }
  }, 1000);
}

// Initialize Quiz
showQuestion();
