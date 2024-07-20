document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#gridButton");
    const listButton = document.querySelector("#listButton");
    const display = document.querySelector("#members");

    if (gridButton && listButton && display) {
        console.log("Elements found:", { gridButton, listButton, display });

        gridButton.addEventListener("click", showGrid);
        listButton.addEventListener("click", showList);

        function showGrid() {
            display.classList.remove("contactList");
            display.classList.add("contactGrid");
        }

        function showList() {
            display.classList.remove("contactGrid");
            display.classList.add("contactList");
        }
    } else {
        console.error('One or more elements not found in the DOM.');
    }
});
