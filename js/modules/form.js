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

function handleSubmitForm() {
  if (isEmailValid()) {
    card.classList.add("hidden");
    thanks.classList.remove("hidden");
  } else {
    throw new Error("Invalid email input");
  }
}

export function initForm() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmitForm();
  });
}
