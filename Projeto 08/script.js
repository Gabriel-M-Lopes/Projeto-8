const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnRetry = document.querySelector("#btnRetry");

const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

// Events
btnTry.addEventListener("click", handleTryClick);
btnRetry.addEventListener("click", handleResetClick);

// Callback
function handleTryClick(event) {
  event.preventDefault();

  const inputElement = document.querySelector("#imputNumber");
  const imputNumber = inputElement.value;

  if (Number(imputNumber) == randomNumber) {
    toggleScreen();
    document.querySelector(".screen2 h2").innerText = `Acertou em ${attempts} tentativas!`;
  }

  inputElement.value = "";
  attempts++;
}

function handleResetClick() {
  toggleScreen();
  attempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}