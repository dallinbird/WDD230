let curDate = new Date();
let lastVisit = new Date(window.localStorage.getItem("curDate"));
let 

const visitsDisplay = document.querySelector("#pageVisits");

let visitsNum = Number(window.localStorage.getItem("numVisits=1s")) || 0;

if (visitsNum == 0) {
  visitsDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if() {
  visitsDisplay.innerHTML = "Times visited: " + visitsNum;
} else if() {

} else {}


visitsNum++;

localStorage.setItem("numVisits-ls", visitsNum);
localStorage.setItem("curDate", curDate);