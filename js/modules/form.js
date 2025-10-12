// * FORM.JS SCRIPT
const form = document.querySelector(".card__form");
const input = document.querySelector(".card__input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const card = document.querySelector(".card");
const thanks = document.querySelector(".thanks");
const invalidText = document.querySelector(".card__invalid");

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
  card.classList.add("hidden");
  thanks.classList.remove("hidden");
}

function handleSubmitForm() {
  if (isEmailValid()) {
    showThanksSection();
  } else {
    showInvalidText();
  }
}

export function initForm() {
  input.addEventListener("input", hideInvalidText);

  input.addEventListener("invalid", (e) => {
    e.preventDefault();
    showInvalidText();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmitForm();
  });
}
