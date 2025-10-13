// * FORM.JS SCRIPT
const form = document.querySelector(".card__form");
const input = document.querySelector(".card__input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const card = document.querySelector(".card");
const thanks = document.querySelector(".thanks");
const invalidText = document.querySelector(".card__invalid");
const thanksEmail = document.querySelector(".thanks__email");

function isEmailValid() {
  const email = input.value.trim();
  return emailRegex.test(email);
}

function showInvalidText() {
  invalidText.classList.remove("hidden");
}

function hideInvalidText() {
  invalidText.classList.add("hidden");
}

function showThanksSection() {
  const email = input.value.trim();

  card.classList.add("hidden");
  thanksEmail.textContent = email;
  thanks.classList.remove("hidden");
}

function changeInputStyleToInvalid() {
  input.classList.add("invalid");
}

function changeInputStyleToNeutral() {
  input.classList.remove("invalid");
}

function handleSubmitForm() {
  if (isEmailValid()) {
    showThanksSection();
  } else {
    showInvalidText();
    changeInputStyleToInvalid();
  }
}

export function initForm() {
  input.addEventListener("input", () => {
    hideInvalidText();
    changeInputStyleToNeutral();
  });

  input.addEventListener("invalid", (e) => {
    e.preventDefault();
    showInvalidText();
    changeInputStyleToInvalid();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmitForm();
  });
}
