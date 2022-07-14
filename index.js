import { banderas } from './data/banderas.js';

let contentHTML = document.querySelector('.contenidoClimaCiudad');
const cityHTML = document.getElementById('selectCiudad'),
buttomHTML = document.getElementById('boton'),
apiKey = '572cf90a9078f52029ab24830b584a94';

buttomHTML.addEventListener('click', ()=>{
    weatherBalloon();
})

const weatherBalloon = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityHTML.value}&appid=${apiKey}`)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      console.log(data);

      let flag =  getCountryFlag(data.sys.country);

      let content = `
    <div class="container">
        <div>            
            <h1>${data.name}</h1>
            <p>${JSON.stringify(data, null, 2)}</p>
            <p>${data.sys.country}</p>  
            <img src="${flag}">     
    </div>`;

    contentHTML.innerHTML = content;
    })
    .catch(function(e) {
      throw new Error(`HTTP ERROR, Status: ${e}`)
    });
  }

  const getCountryFlag =  (country) => {
    let flag = banderas.find((fl) => fl.name == country)?.url;
    if(flag == undefined) flag = '';
    return flag;
  }
  


