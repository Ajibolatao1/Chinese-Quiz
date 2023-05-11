// SELECT ELEMENTS
const displayEl = document.querySelector(".first");
const box1 = document.querySelector(".second");
const box2 = document.querySelector(".third");
const lettersEl = document.querySelector(".letters");
const wordsEl = document.querySelector(".words");
const sentencesEl = document.querySelector(".sentences");
const itemEls = document.querySelectorAll(".item");
const nextBtn = document.querySelector(".bi-arrow-right");

// Import question
import questions from "./questions.js";

// Get default category
let questionCat = questions.words;

// Get random number
let randNum = Math.floor(Math.random() * questionCat.length);

// Get current Question
let currentQuestion = questionCat[randNum]


let catNumb = 0;


// FUNCTIONS

// Function to fill in the section
function fillSection() {
  displayEl.textContent = currentQuestion.C;
  box1.childNodes[0].textContent = currentQuestion.R;
  box2.childNodes[0].textContent = currentQuestion.E;
}

// Select the category
function selectCategory() {
  if (catNumb == 0) questionCat = questions.letters;
  if (catNumb == 1) questionCat = questions.words;
  if (catNumb == 2) questionCat = questions.sentences;

  randomQue();
}

// Select active class
function activeClass(numb) {
  itemEls.forEach((item, index) => {
    item.classList.remove("active");
    itemEls[numb].classList.add("active");
  })
}

// Get random question
function randomQue() {
  randNum = Math.floor(Math.random() * questionCat.length);
  currentQuestion = questionCat[randNum];
  // Fill section
  fillSection();
  // Hide contents
  hideContents();
}

// Hide boxes text contents
function hideContents() {
  box1.childNodes[0].classList.add("hidden");
  box2.childNodes[0].classList.add("hidden");
}


itemEls.forEach((item, index) =>
  item.addEventListener("click", () => {
    catNumb = index;
    // Select category
    selectCategory();

    // Select active class
    activeClass(index);
  })
);

fillSection();

nextBtn.addEventListener("click", randomQue)


// Remove hidden features
box1.addEventListener("click", () => {
  box1.childNodes[0].classList.remove("hidden")
})
box2.addEventListener("click", () => {
  box2.childNodes[0].classList.remove("hidden")
})