const visitsDisplay = document.querySelector(".pageVisits");

let visitsNum = Number(window.localStorage.getItem("numVisits=1s")) || 0;

if (visitsNum !== 0) {
  visitsDisplay.textContent = visitsNum;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
visitsNum++;

localStorage.setItem("numVisits-ls", visitsNum);
