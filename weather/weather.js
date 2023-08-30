var date1 = document.getElementById("date1");
date1.innerText = new Date().toDateString();
var nameday = document.getElementById("cityday");
var tempday = document.getElementById("tempday");
var weatherday = document.getElementById("weatherday");
var date2 = document.getElementById("date2");
date2.innerText = new Date().toDateString();
var namenight = document.getElementById("citynight");
var tempnight = document.getElementById("tempnight");
var weathernight = document.getElementById("weathernight");
var list = document.getElementById("results");
var search = document.getElementById("search");
var sunimage = document.getElementById('sun2');
var sunimagechanger= document.getElementById('daycontain');
var moonimage = document.getElementById('moon2');
var moonimagechanger= document.getElementById('nightcontain');

// THE SEARCH FUNCTION
search.onkeyup = async function (e) {
  if (e.keyCode == 13) {
    list.innerHTML = "";
    await getdata();
    if (weather.features.length !== 0) {
      for (let i = 0; i < weather.features.length; i++) {
        list.style.display = "block";
        list.innerHTML += `<div id="${i}" onclick="gettemp(this.id)" class="resultsection"><svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="searchicon" d="M12 0.333344C5.55004 0.333344 0.333374 5.55001 0.333374 12C0.333374 20.75 12 33.6667 12 33.6667C12 33.6667 23.6667 20.75 23.6667 12C23.6667 5.55001 18.45 0.333344 12 0.333344ZM3.66671 12C3.66671 7.40001 7.40004 3.66668 12 3.66668C16.6 3.66668 20.3334 7.40001 20.3334 12C20.3334 16.8 15.5334 23.9833 12 28.4667C8.53337 24.0167 3.66671 16.75 3.66671 12Z" fill="black"/>
                <path class="searchicon"d="M12 16.1667C14.3012 16.1667 16.1667 14.3012 16.1667 12C16.1667 9.69882 14.3012 7.83334 12 7.83334C9.69885 7.83334 7.83337 9.69882 7.83337 12C7.83337 14.3012 9.69885 16.1667 12 16.1667Z" fill="black"/>
                </svg>            
                <p class="resultsectiontext">${weather.features[i].place_name}</p></div>`;
      }
    } else {
      list.style.display = "none";
    }
  }
};
async function searchicon(){
    list.innerHTML = "";
    await getdata();
    if (weather.features.length !== 0) {
      for (let i = 0; i < weather.features.length; i++) {
        list.style.display = "block";
        list.innerHTML += `<div id="${i}" onclick="gettemp(this.id)" class="resultsection"><svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="searchicon" d="M12 0.333344C5.55004 0.333344 0.333374 5.55001 0.333374 12C0.333374 20.75 12 33.6667 12 33.6667C12 33.6667 23.6667 20.75 23.6667 12C23.6667 5.55001 18.45 0.333344 12 0.333344ZM3.66671 12C3.66671 7.40001 7.40004 3.66668 12 3.66668C16.6 3.66668 20.3334 7.40001 20.3334 12C20.3334 16.8 15.5334 23.9833 12 28.4667C8.53337 24.0167 3.66671 16.75 3.66671 12Z" fill="black"/>
                <path class="searchicon"d="M12 16.1667C14.3012 16.1667 16.1667 14.3012 16.1667 12C16.1667 9.69882 14.3012 7.83334 12 7.83334C9.69885 7.83334 7.83337 9.69882 7.83337 12C7.83337 14.3012 9.69885 16.1667 12 16.1667Z" fill="black"/>
                </svg>            
                <p class="resultsectiontext">${weather.features[i].place_name}</p></div>`;
      }
    } else {
      list.style.display = "none";
    }
}
// GETTING THE DATA AND IMPLEMENTING THEM
async function getdata() {
  result = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${search.value}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`
  );
  res = await result.json();
  weather = res;
  console.log(weather);
}
async function gettemp(x) {
  resulttemp = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${weather.features[x].center[1]}&lon=${weather.features[x].center[0]}&cnt=1&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`
  );
  restemp = await resulttemp.json();
  console.log(restemp);

  nameday.innerText = restemp.city.name;
  tempday.innerText = `${Math.round(restemp.list[0].temp.day)}°`;
  weatherday.innerText = restemp.list[0].weather[0].main;

  namenight.innerText = restemp.city.name;
  tempnight.innerText = `${Math.round(restemp.list[0].temp.night)}°`;
  weathernight.innerText = restemp.list[0].weather[0].main;

  switch(weatherday.innerText){
    case 'Clear':
      weatherday.style.color='#ff8e27'
      weathernight.style.color='#ff8e27'
      sunimage.src="./Weatherpictures/Day Sun.png"
      moonimage.src="./Weatherpictures/Night Moon.png"
      break;
    case 'Clouds':
      weatherday.style.color='#8ec1dd'
      weathernight.style.color='#8ec1dd'
      sunimage.src="./Weatherpictures/Day Clouds.png"
      moonimage.src="./Weatherpictures/Night Clouds.png"
      break;
    case 'Wind':
      weatherday.style.color='#27b1ff'
      weathernight.style.color='#27b1ff'
      sunimage.src="./Weatherpictures/Day Wind.png"
      moonimage.src="./Weatherpictures/Night Wind.png"
      break;
      case 'Rain':
      weatherday.style.color='#4e8db1'
      weathernight.style.color='#4e8db1'
      sunimage.src="./Weatherpictures/Day Rain.png"
      moonimage.src="./Weatherpictures/Night Rain.png"
      break;
      case 'Snow':
      weatherday.style.color='#8ec1dd'
      weathernight.style.color='#8ec1dd'
      sunimage.src="./Weatherpictures/Day Snow.png"
      moonimage.src="./Weatherpictures/Night Snow.png"
      break;
      case 'Thunderstorm':
      weatherday.style.color='#bf8edd'
      weathernight.style.color='#bf8edd'
      sunimage.src="./Weatherpictures/Day Storm.png"
      moonimage.src="./Weatherpictures/Night Storm.png"
      break;
} 

  list.style.display = "none";
}
function clear() {
  list.style.display = "none";
}

document.body.addEventListener("click", (event) => {
  if (event.target.id !== "results") {
    list.style.display = "none";
  }
});
