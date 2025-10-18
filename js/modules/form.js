// * IMPORT MODULES
import {
  shakeInput,
  resetAnimation,
  fadeOutCard,
  fadeOutThanks,
  fadeInCard,
} from "./ui.js";

// * FORM.JS SCRIPT
const form = document.querySelector(".card__form");
const input = document.querySelector(".card__input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const card = document.querySelector(".card");
const thanks = document.querySelector(".thanks");
const invalidText = document.querySelector(".card__invalid");
const thanksEmail = document.querySelector(".thanks__email");
const dismiss = document.querySelector(".thanks__dismiss");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

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

  if (prefersReducedMotion) {
    card.classList.add("hidden");
    thanksEmail.textContent = email;
    thanks.classList.remove("hidden");
    thanks.classList.add("fade-in");
  } else {
    card.addEventListener(
      "animationend",
      () => {
        card.classList.add("hidden");
        thanksEmail.textContent = email;
        thanks.classList.remove("hidden");
        thanks.classList.add("fade-in");
      },
      { once: true }
    );
  }
}

function hideThanksSection() {
  fadeOutThanks();

  if (prefersReducedMotion) {
    thanks.classList.add("hidden");
    input.value = "";
    card.classList.remove("hidden");
    fadeInCard();
  } else {
    thanks.addEventListener(
      "animationend",
      () => {
        thanks.classList.add("hidden");
        input.value = "";
        card.classList.remove("hidden");
        fadeInCard();
      },
      { once: true }
    );
  }
}

function changeInputStyleToInvalid() {
  input.classList.add("invalid");
}

function changeInputStyleToNeutral() {
  input.classList.remove("invalid");
}

function handleSubmitForm() {
  if (isEmailValid()) {
    fadeOutCard();
    showThanksSection();
  } else {
    showInvalidText();
    changeInputStyleToInvalid();
    shakeInput(input);
  }
}

export function initForm() {
  resetAnimation(input, card, thanks);

  input.addEventListener("input", () => {
    hideInvalidText();
    changeInputStyleToNeutral();
  });

  input.addEventListener("invalid", (e) => {
    e.preventDefault();
    showInvalidText();
    changeInputStyleToInvalid();
    shakeInput(input);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmitForm();
  });

  dismiss.addEventListener("click", () => {
    hideThanksSection();
  });
}
