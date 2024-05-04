// for copyright symbol and year
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = "&copy; " + currentYear;

//for Last Modified
const lastMod = document.lastModified;
document.getElementById("lastMod").innerHTML = "last Modified: " + lastMod;
