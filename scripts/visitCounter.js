const visitsDisplay = document.querySelector("#pageVisits");

let visitsNum = Number(window.localStorage.getItem("numVisits=1s")) || 0;

if (visitsNum !== 0) {
  visitsDisplay.textContent = visitsNum;
} else {
  visitsDisplay.textContent = `Hello from the other side!`;
}
visitsNum++;

localStorage.setItem("numVisits-ls", visitsNum);
