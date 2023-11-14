const football = document.querySelector(".field");
const ball = document.querySelector(".ball");
let ballVelX = 0;
let ballVelY = 0;
let ballPosX = 240;
let ballPosY = 135;

function updateBallPosition() {
  requestAnimationFrame(updateBallPosition);

  if (
    ballPosY + ballVelY < 0 ||
    ballPosY + ballVelY > football.clientHeight - ball.clientHeight
  ) {
    ballVelY = -ballVelY;
  }

  if (
    ballPosX + ballVelX < 0 ||
    ballPosX + ballVelX > football.clientWidth - ball.clientWidth
  ) {
    ballVelX = -ballVelX;
  }

  ballPosX += ballVelX;
  ballPosY += ballVelY;

  ballVelX *= 0.95;
  ballVelY *= 0.95;

  ball.style.transform = `translate(${ballPosX}px, ${ballPosY}px)`;
}

updateBallPosition();

football.addEventListener("click", function (event) {
  ballVelX = (event.offsetX - ballPosX) / 10;
  ballVelY = (event.offsetY - ballPosY) / 10;
});

let sectionSelect = document.getElementById("sectionSelect");
console.log(sectionSelect);
sectionSelect.addEventListener("change", function () {
  let selectedOption = sectionSelect.options[sectionSelect.selectedIndex];

  let selectedValue = selectedOption.value;
  let selectedText = selectedOption.text;

  console.log("", selectedValue);
  console.log("", selectedText);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
console.log("test");

function playGame(userChoice) {
  let userScore = 0;
  let computerScore = 0;
  const resultElement = document.getElementById("resul");
  const userScoreElement = document.querySelector(".sc");
  const computerScoreElement = document.querySelector(".scr");
  console.log(userScoreElement);
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  resultElement.textContent = `Ваш вибір: ${getChoiceName(
    userChoice
  )}. Вибір комп'ютера: ${getChoiceName(computerChoice)}.`;

  if (userChoice === computerChoice) {
    resultElement.textContent += " Нічия!";
  } else if (
    (userChoice === 1 && computerChoice === 2) ||
    (userChoice === 2 && computerChoice === 3) ||
    (userChoice === 3 && computerChoice === 1)
  ) {
    resultElement.textContent += " Ви виграли!";
    userScore++;
  } else {
    resultElement.textContent += " Комп'ютер виграв.";
    computerScore++;
  }

  userScoreElement.innerHTML = userScore;
  computerScoreElement.innerHTML = computerScore;
}

function getChoiceName(choice) {
  switch (choice) {
    case 1:
      return "Камінь";
    case 2:
      return "Ножиці";
    case 3:
      return "Папір";
    default:
      return "Невідомий вибір";
  }
}

function guessNumber() {
  // Get the user's guess input element
  const userGuessElement = document.getElementById("userGuess");

  // Get the result element
  const resultElement = document.getElementById("res");

  // Generate a random number between 1 and 100 (you can adjust the range)
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Get the user's guess and convert it to an integer
  const userGuess = parseInt(userGuessElement.value);

  // Check if the user's guess is correct
  if (isNaN(userGuess)) {
    resultElement.textContent = "Будь ласка, введіть числове значення.";
  } else {
    if (userGuess === randomNumber) {
      resultElement.textContent = "Вітаємо! Ви вгадали число!";
    } else {
      resultElement.textContent = "Спробуйте ще раз. Ви не вгадали.";
    }
  }
}
