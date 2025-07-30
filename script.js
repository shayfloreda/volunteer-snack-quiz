const questions = [
  {
    question: "What was your favourite subject in school?",
    answers: [
      { text: "Literature or Social Studies", type: "kaya_toast" },
      { text: "Design & Technology or Art", type: "kueh_lapis" },
      { text: "PE or Outdoor Ed", type: "satay" },
      { text: "Student Leadership or Project Work", type: "teh_tarik" },
      { text: "Science or Math", type: "laksa" },
      { text: "Music or Drama", type: "goreng_pisang" }
    ]
  },
  {
    question: "During group work, you usually...",
    answers: [
      { text: "Step up to lead and delegate tasks", type: "teh_tarik" },
      { text: "Keep the peace and help everyone get along", type: "popiah" },
      { text: "Handle the design, planning, or behind-the-scenes work", type: "kueh_lapis" },
      { text: "Cheer people on and boost morale", type: "roti_prata" },
      { text: "Focus deeply on the quality of the final product", type: "laksa" }
    ]
  }
];

let currentQuestionIndex = 0;
let scores = {};

function startQuiz() {
  document.getElementById("quiz-header").style.display = "none";
  document.getElementById("quiz-question").style.display = "block";
  currentQuestionIndex = 0;
  scores = {};
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = question.question;
  const answersDiv = document.getElementById("answer-buttons");
  answersDiv.innerHTML = "";
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.onclick = () => selectAnswer(answer.type);
    answersDiv.appendChild(button);
  });
}

function selectAnswer(type) {
  scores[type] = (scores[type] || 0) + 1;
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  document.getElementById("next-button").style.display = "none";
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-question").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";
  const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const resultsMap = {
    kaya_toast: "Kaya Toast – The Thoughtful One",
    kueh_lapis: "Kueh Lapis – The Layered Visionary",
    satay: "Satay – The Friendly Connector",
    teh_tarik: "Teh Tarik – The All-Rounder Leader",
    laksa: "Laksa – The Focused Strategist",
    goreng_pisang: "Goreng Pisang – The Creative Spark",
    popiah: "Popiah – The Peacekeeper",
    roti_prata: "Roti Prata – The Energizer"
  };
  document.getElementById("result-text").innerText = resultsMap[topType] || "You're a unique blend of everything!";
}

function restartQuiz() {
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-header").style.display = "block";
}
