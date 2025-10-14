// * UI.JS SCRIPT
const theme = document.querySelector(".theme");
const themeIconLightHTML = `
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="theme__icon theme__icon--light"
          aria-hidden="true"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#a)" fill="currentColor">
              <path
                d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#ffffff" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </g>
        </svg>`;
const themeIconDarkHTML = `
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="theme__icon theme__icon--dark hidden"
          aria-hidden="true"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.487 4.37 3.55a11.399 11.399 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205 1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.434-2.025-2.765-2.766-3.328-6.83-1.844-10.168Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>

`;
const themeButtonHTML = `
        <button
          type="button"
          aria-label="Switch to dark theme"
          aria-pressed="false"
          class="theme__button"
        ></button>
`;
const listElements = document.querySelectorAll(".card__list");
const checkIconSVG = `<svg class="card__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="currentColor"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>`;
const successIconSVG = ` <svg
            class="thanks__icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <defs>
              <linearGradient id="gradient" x1="100%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FF6A3A" />
                <stop offset="100%" stop-color="#FF527B" />
              </linearGradient>
            </defs>
            <g fill="none">
              <circle cx="32" cy="32" r="32" fill="url(#gradient)" />
              <path
                stroke="#FFF"
                stroke-width="4"
                d="m18.286 34.686 8.334 7.98 19.094-18.285"
              />
            </g>
          </svg>`;
const thanksWrapper = document.querySelector(".thanks__wrapper");

function addThemeHTML() {
  theme.innerHTML = themeIconLightHTML + themeIconDarkHTML + themeButtonHTML;
}

function addCheckIconSVG() {
  listElements.forEach((list) => {
    list.insertAdjacentHTML("afterbegin", checkIconSVG);
  });
}

function addSuccessIconSVG() {
  thanksWrapper.insertAdjacentHTML("afterbegin", successIconSVG);
}

export function resetAnimation(...elements) {
  elements.forEach((element) => {
    element.addEventListener("animationend", () => {
      element.classList.remove("shake");
      void element.offSetWidth;
    });
  });
}

export function shakeInput(inputElement) {
  inputElement.classList.add("shake");
}

export function initUI() {
  addThemeHTML();
  addCheckIconSVG();
  addSuccessIconSVG();
}
