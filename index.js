var Api = "044c5caeed51f6ad5794f356195899e5";
var Temp = document.getElementById('temp');
var city = document.getElementById('CityName');
var btn  = document.getElementById('SearchBtn');
var current =document.getElementById('city');
var Wind =document.getElementById('wind');
var Visible =document.getElementById('visible');
var Hum =document.getElementById('Humidity');
var Sky = document.getElementById('sky');


 btn.addEventListener("click", async ()=>
 {
    const City = city.value;
   const data = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Api}&units=metric`);
   const Data=  await data.json();
   console.log(Data);
   current.innerHTML = Data.name;
   Temp.innerHTML= Data.main.temp + "°C";
   Wind.innerHTML= Data.wind.speed;
   Hum.innerHTML=Data.main.humidity;
   Visible.innerHTML= Data.visibility;
   Sky.innerHTML = Data.weather[0].description;
   


} 
)



