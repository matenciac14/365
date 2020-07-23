import Component from '/Component.js';

const urlpeople = "https://swapi.dev/api/people/1";
const urlstarships="https://swapi.dev/api/starships/9/";
const urlplanets="https://swapi.dev/api/planets/3/";


document.getElementById('uno').onclick = ()=>{
    Component(urlpeople)
}
document.getElementById('dos').onclick = ()=>{
    Component(urlplanets)
}
document.getElementById('tres').onclick = ()=>{
    Component(urlstarships)
}