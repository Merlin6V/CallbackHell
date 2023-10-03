//creating container
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);


//restcountries fetch with API

var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>data(data1));

    function data(data1){
        for(var i in data1){ 
            console.log(data1[i]);
    var div = document.createElement("div");
    div.innerHTML=`<div class="card-deck">
    <div class="card">
    <h4 class="card-header bg-dark" style="color:white; text-align:center">${data1[i].name}</h4>
    <img src="${data1[i].flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> Capital: ${data1[i].capital}</h5>
      <p class="card-text">Region: ${data1[i].region}</p>
      <p class="card-text">CountryCode:${data1[i].alpha3Code}</p>
      </div>
     <div class="card-footer">
        <button type="button" class="btn btn-sm btn-outline-secondary " onclick="weather(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
     </div>  
  </div>`
  document.body.append(div);
        }
}

function weather(lat,lon){
  let res= fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=20bf4bd158e253e914576847478e37ed`)
  .then((data)=>data.json()).then((data2)=>
 {alert(`
 latitude: ${lat}
 longitude: ${lon}
 Temp: ${data2.main.temp}`);
});
}