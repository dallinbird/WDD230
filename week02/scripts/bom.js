const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value != "") {
    const li = document.createElement("li");
    li.innerHTML = input.value;

    //delete button

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    input.focus();
    input.value = "";
  } else {
    alert("Please enter a Book of Mormon Chapter.");
    input.focus;
  }
});
