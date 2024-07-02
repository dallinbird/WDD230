const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets); // temporary testing of data retreival
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
  // card build code goes here
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2"); // fill in the blank
    const birthDate = document.createElement("p");
    const birthPlace = document.createElement("p");
    const portrait = document.createElement("img");

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth:  ${prophet.birthplace}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    ); // fill in the blank
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();
