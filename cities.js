import { cities } from './data/ciudades.js';

let selectHTML = document.getElementById('selectCiudad');

const getCities = async (currentCity) => {
    return new Promise((resolve, reject) =>
     {
        let city = cities[currentCity];
         (city) ? resolve(city) : reject('');    
    });    
}

const showCities = async () => {
    let dropDown = [];
    for (let index = 0; index < cities.length; index++) {
        dropDown[index] = await getCities(index);
        let optionHTML = `<option value="${dropDown[index].city}">${dropDown[index].city}</option>`
        selectHTML.innerHTML += optionHTML;   
    }
};

showCities();


