const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "https://dallinbird.github.io/wdd230/data/links.json";
const testURL = "http://127.0.0.1:5500/data/links.json";
const weeksHTML = document.querySelector("#weeks");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data); // temporary testing of data retreival
  displayLinks(data.weeks); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayLinks = (weeks) => {
  // card build code goes here
  weeks.forEach((week) => {
    const weekList = document.createElement("li");
    weekList.textContent = `${week.week}: `;

    week.links.forEach((link) => {
      const activity = document.createElement("a");
      activity.textContent = `${link.title} | `;
      activity.setAttribute("href", link.url);

      // Convert the element to a string and concatenate to linksHTML
      weekList.appendChild(activity);
    });

    console.log(weekList);

    weeksHTML.appendChild(weekList);
  });
};

getLinks();

// async function getLinks() {
//   const response = await fetch(testURL);
//   const data = await response.json();
//   console.log(data.weeks);
//   displayLinks(data.weeks);
// }

// const displayLinks = (data) => {
//   // card build code goes here
//   weeks.forEach((week) => {
//     const weekList = document.createElement("li");
//     weekList.textContent = `${week.week}`;
//     console.log(weekList);

//     weekList.appendChild(card);
//     weeks.appendChild(card);
//   });
// };
