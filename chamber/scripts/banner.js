const banner = document.querySelector("#banner");

function showBanner() {
	const date = new Date();
	const day = date.getDay();
	const close = document.querySelector("#closer");
	if (day === 1 || day === 2 || day === 3 || day === 5 || day === 6){
		console.log(day);
        banner.classList.remove("hidden");
		banner.classList.add("show");
	};
    close.addEventListener("click", () => {
        banner.classList.remove("show");
		banner.classList.add("hidden");	
	})
};

showBanner();
