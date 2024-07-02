const testURL = "http://127.0.0.1:5500/chamber/data/directory.json";

const indexDir = document.querySelector("#indexDirectory");

async function getMembersData() {
  const response = await fetch(testURL);
  const data = await response.json();
  console.log(data);
  displayMembers(data.members);
}

const displayMembers = (members) => {
  // card build code goes here
  members.forEach((member) => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const portrait = document.createElement("img");
    const memberlevel = document.createElement("p");

    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;
    portrait.setAttribute("src", member.image);
    portrait.setAttribute("alt", `Portrait of ${member.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    memberlevel.textContent = `${member.membership_level}`;

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(portrait);
    card.appendChild(memberlevel);

    indexDir.appendChild(card);
  });
};

getMembersData();
