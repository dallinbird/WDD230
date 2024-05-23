const input = document.querySelector("#favchap");
input.focus();
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chapterArray = getChapterList() || [];

function getChapterList() {
  chapterArray.forEach((chapter) => {
    displayList(chapter);
  });
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  } else {
    alert("Please enter a Book of Mormon Chapter.");
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus;
  });
  console.log("I did type out this code so I would understand it better :)");
}

function setChapterList() {
  localStorage.setItem("myFavBOMlist", JSON.stringify(chapterArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem(myFavBOMlist));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chapterArray.filter((item) => item !== chapter);
  setChapterList();
}
