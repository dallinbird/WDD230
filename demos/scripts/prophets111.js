// const url =
//   "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// fetch("http://127.0.0.1:5500/week05/new-ward-members.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const section = document.querySelector("section");
//     const members = data.members;

//     data.forEach((data.members) => {
//       section.innerHTML += `
//         <artical>
//             <p>Ward name: ${members.family}<p>
//         <artical>
//         `;
//     });
//   });

fetch("http://127.0.0.1:5500/demos/new-ward-members.json")
  .then((response) => response.json())
  .then((data) => {
    const section = document.querySelector("section");
    const members = data.members;

    members.forEach((member) => {
      // Change here
      section.innerHTML += `
        <article>
            <p>Ward name: ${member.family}</p>
        </article>
      `;
    });
  })
  .catch((error) => {
    console.error("Error fetching the JSON file:", error);
  });
