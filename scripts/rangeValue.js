const rangeValue = document.getElementById("rangeValue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangeValue.innerHTML = range.value;
}
