// weather API key d1380d494c1acb687b07f9ceae26774a
//api Resource
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 46.401206505865744, -117.00164794206258

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=46.401206505865744&lon=-117.00164794206258&appid=d1380d494c1acb687b07f9ceae26774a&units=imperial";


  async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}



const threeDayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.401206505865744&lon=-117.00164794206258&appid=d1380d494c1acb687b07f9ceae26774a&units=imperial';
const weatherForcast = document.querySelector("#weatherForcast");

async function threeDayFetch() {
  try {
      const responseFor = await fetch(threeDayURL);
      if (responseFor.ok) {
          const dataForcast = await responseFor.json();
          console.log(dataForcast);
          displayForcast(dataForcast);
      } else {
      throw Error(await responseFor.text());
  }
} catch (error) {
    console.log(error);
}
}


function displayForcast (forcast){
	for(let i = 0; i < forcast.list.length; i+= 14) {
		const items = document.createElement("span");

    
    const temp = document.createElement("p");
    const weatherIcon = document.createElement('img');;
    const weatherDesc = document.createElement("figcaption");
    
    temp.innerHTML = `${forcast.list[i].main.temp}&deg;F`;
    
    let iconSrc = `https://openweathermap.org/img/w/${forcast.list[i].weather[0].icon}.png`;
    let desc = forcast.list[i].weather.description;      
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    
    weatherDesc.textContent = forcast.list[i].weather[0].description;
    
    items.appendChild(temp);
    items.appendChild(weatherIcon);
    items.appendChild(weatherDesc);
    
		weatherForcast.appendChild(items);
	};
}





apiFetch();
threeDayFetch();



