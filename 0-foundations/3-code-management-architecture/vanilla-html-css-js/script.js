//const apiKey = "4d8fb5b93d4af21d66a2948710284366";
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=it&appid=${apiKey}&units=metric`;
let weather = {
    apiKey : '4d8fb5b93d4af21d66a2948710284366',
    //"apiKey": "0ace717d4328af05f09958fab0d4eab6"
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ this.apiKey +"&units=metric")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(() => {
            alert("the entered city does not exist");
        })
    },
    displayWeather : function(data){
        const {name}  = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText= "Humidity: " +humidity +"%";
        document.querySelector(".wind").innerText= "Wind speed: " +speed +"m/s";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+name+"')"  
},
search: function () {
       this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click" , function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
    weather.search();
});

weather.fetchWeather("Naples");