function getMessage() {
  // get the current date
  let currentDate = new Date();
  let storedDate;
  let message;

  //get the last visited date from local storage
  let date = localStorage.getItem("date");

  if (date) {
    //convert the storedDate into a date object
    storedDate = new Date(parseInt(date));
  }

  //compare the dates and return message
  if (date) {
    let differenceInTime = currentDate.getTime() - storedDate.getTime();

    if (differenceInTime < 86400000) {
      message = "Back so soon! Awesome!";
    } else {
      let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
      message = `You last visited ${differenceInDays} days ago`;
    }
  } else {
    message = `Welcome! Let us know if you have any questions.`;
  }

  // store date in local storage

  localStorage.setItem("date", currentDate.getTime());

  return message;
}

let displayMessage = getMessage();
document.querySelector("#pageVisits").innerHTML = displayMessage;
