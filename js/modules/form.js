// * FORM.JS SCRIPT
const form = document.querySelector(".card__form");
const input = document.querySelector(".card__input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const card = document.querySelector(".card");
const thanks = document.querySelector(".thanks");

function isEmailValid() {
  const email = input.value;
  return emailRegex.test(email);
}

export function initForm() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
