const testURL = "http://127.0.0.1:5500/chamber/data/directory.json";
const spotlight = document.querySelector("#spotlight");

async function getMembersData() {
  try {
    const response = await fetch(testURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    displaySpotlight(data.members);
  } catch (error) {
    console.error('Error fetching the members data:', error);
  }
}

function pickRandomMember(members) {
  const eligibleMembers = members.filter(member => 
    member.membership_level === "Silver" || member.membership_level === "Gold"
  );

  if (eligibleMembers.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
  return eligibleMembers[randomIndex];
}

function displaySpotlight(members) {
  const randomMember = pickRandomMember(members);
  if (randomMember) {
    spotlight.innerHTML = `
      <h2>${randomMember.name}</h2>
      <img src="${randomMember.image}" alt="${randomMember.name}">
      <p>Address: ${randomMember.address}</p>
      <p>Phone: ${randomMember.phone}</p>
      <p><a href="${randomMember.website}" target="_blank">Visit Website</a></p>
      <p>Membership Level: ${randomMember.membership_level}</p>
    `;
  } else {
    spotlight.innerHTML = `<p>No eligible members found.</p>`;
  }
}

getMembersData();
