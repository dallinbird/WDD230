const visitsDisplay = document.querySelector("#pageVisits");

let visitsNum = Number(window.localStorage.getItem("numVisits=1s")) || 0;

if (visitsNum !== 0) {
  visitsDisplay.innerHTML = "Times visited: " + visitsNum;
} else {
  visitsDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
}

visitsNum++;

localStorage.setItem("numVisits-ls", visitsNum);
