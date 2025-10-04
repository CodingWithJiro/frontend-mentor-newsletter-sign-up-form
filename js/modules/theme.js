// * THEME.JS SCRIPT
const html = document.documentElement;

function showIconLight(iconLightElement) {
  iconLightElement.classList.remove("hidden");
}

function hideIconLight(iconLightElement) {
  iconLightElement.classList.add("hidden");
}

function showIconDark(iconDarkElement) {
  iconDarkElement.classList.remove("hidden");
}

function hideIconDark(iconDarkElement) {
  iconDarkElement.classList.add("hidden");
}

function addActiveTheme(buttonElement) {
  buttonElement.classList.add("active");
}

function removeActiveTheme(buttonElement) {
  buttonElement.classList.remove("active");
}

function addDarkTheme() {
  html.classList.add("dark");
}

function toggleDarkTheme() {
  html.classList.toggle("dark");
}

function savedTheme() {
  return localStorage.getItem("theme");
}

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function updateAriaPressedToTrue(buttonElement) {
  buttonElement.setAttribute("aria-pressed", "true");
}

function updateAriaPressedToFalse(buttonElement) {
  buttonElement.setAttribute("aria-pressed", "false");
}

function updateAriaLabelForDark(buttonElement) {
  buttonElement.setAttribute("aria-label", "Switch to light theme");
}

function updateAriaLabelForLight(buttonElement) {
  buttonElement.setAttribute("aria-label", "Switch to dark theme");
}

function preLoadDarkTheme(buttonElement, iconLightElement, iconDarkElement) {
  if (savedTheme() === "dark" || (savedTheme() === null && prefersDark())) {
    addDarkTheme();
    addActiveTheme(buttonElement);
    hideIconLight(iconLightElement);
    showIconDark(iconDarkElement);
    updateAriaPressedToTrue(buttonElement);
    updateAriaLabelForDark(buttonElement);
  }
}

function isDarkTheme() {
  return html.classList.contains("dark");
}

function savePreferredTheme() {
  localStorage.setItem("theme", isDarkTheme() ? "dark" : "light");
}

function toggleTheme(buttonElement, iconLightElement, iconDarkElement) {
  buttonElement.addEventListener("click", () => {
    toggleDarkTheme();

    if (isDarkTheme()) {
      addActiveTheme(buttonElement);
      hideIconLight(iconLightElement);
      showIconDark(iconDarkElement);
      updateAriaPressedToTrue(buttonElement);
      updateAriaLabelForDark(buttonElement);
    } else {
      removeActiveTheme(buttonElement);
      showIconLight(iconLightElement);
      hideIconDark(iconDarkElement);
      updateAriaPressedToFalse(buttonElement);
      updateAriaLabelForLight(buttonElement);
    }

    savePreferredTheme();
  });
}

export function initTheme() {
  const iconLight = document.querySelector(".theme__icon--light");
  const iconDark = document.querySelector(".theme__icon--dark");
  const button = document.querySelector(".theme__button");

  preLoadDarkTheme(button, iconLight, iconDark);
  toggleTheme(button, iconLight, iconDark);
}
