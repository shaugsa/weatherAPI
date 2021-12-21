const { default: axios } = require("axios")

let apiKey  = 'ac9dccbddcaa3555bb718483645920b5';

const list = document.querySelector('.header__list')

let close;

list.addEventListener('click', (e) => {

  if (e.target.tagName === 'A') {
    close = document.querySelector('.title__close')
    let city = e.target.dataset.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    localStorage.setItem(city, url)
    window.localStorage.getItem(city)

    axios.get(url).then(res => {
      let data = res.data
      let des = res.data.weather[0]
      let temp = res.data.main
      let wind = res.data.wind
      let weather = document.createElement('div')
      weather.className = 'cards__wrap'
      weather.innerHTML = `<div class='title'>
        <h2 class="title__cityName">${data.name}</h2>
        <img class="title__close" src='img/cancel.png' />
      </div>
      <div class='weather'>
        <img class='weather__img' src='http://openweathermap.org/img/wn/${des.icon}@2x.png' alt='weather-icon'/>
        <h4 class='weather__des'>${des.description}</h4>
      </div>
      <div class='temp'>
        <h4 class='temp__feels-like'>Температура сейчас ${temp.temp}</h4>
        <h4 class='temp__feels-like'>Ощущается как ${temp.feels_like}</h4>
        <h4 class='temp__feels-like'>Минимальная температура ${temp.temp_max}</h4>
        <h4 class='temp__feels-like'>Максимальная температура ${temp.temp_min}</h4>
      </div>
      <div class='wind'>
        <h4 class='wind__deg'>${wind.deg} направление</h4>
        <h4 class='wind__gust'>Порывы до ${wind.gust}</h4>
        <h4 class='wind__speed'>Скорость ${wind.speed}</h4>
      </div>`;
     cards.appendChild(weather)
     })
  }
})

close.addEventListener('click', (e) => {
  if (e.target.tagName === 'img') {
    console.log('click')
  }
})

button.onclick = () => {
  let city = document.getElementById('search_id').value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  localStorage.setItem(city, url)
  window.localStorage.getItem(city)

  axios.get(url).then(res => {
    let data = res.data
    let des = res.data.weather[0]
    let temp = res.data.main
    let wind = res.data.wind
    let weather = document.createElement('div')
    weather.className = 'cards__wrap'
    weather.innerHTML = `<div class='title'>
      <h2 class="title__cityName">${data.name}</h2>
      <img class="title__close" src='img/cancel.png' />
    </div>
    <div class='weather'>
      <img class='weather__img' src='http://openweathermap.org/img/wn/${des.icon}@2x.png' alt='weather-icon'/>
      <h4 class='weather__des'>${des.description}</h4>
    </div>
    <div class='temp'>
      <h4 class='temp__feels-like'>Температура сейчас ${temp.temp}</h4>
      <h4 class='temp__feels-like'>Ощущается как ${temp.feels_like}</h4>
      <h4 class='temp__feels-like'>Минимальная температура ${temp.temp_max}</h4>
      <h4 class='temp__feels-like'>Максимальная температура ${temp.temp_min}</h4>
    </div>
    <div class='wind'>
      <h4 class='wind__deg'>${wind.deg} направление</h4>
      <h4 class='wind__gust'>Порывы до ${wind.gust}</h4>
      <h4 class='wind__speed'>Скорость ${wind.speed}</h4>
    </div>`;
   cards.appendChild(weather)
   })
}


// for (let i=0; i<localStorage.length; i++) {
//   let key = localStorage.key(i);
//   localStorage.removeItem(key);
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// }



// новый код


// let apiKey  = 'ac9dccbddcaa3555bb718483645920b5';
// let city = document.getElementById('search_id').value;
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
// const list = document.querySelector('.header__list')

// list.addEventListener('click', (e) => {
//   if (e.target.tagName === 'A') {
//     city = e.target.dataset.city;
//     console.log(city)
//     localStorage.setItem(city, url)
//     console.log(window.localStorage.getItem(city))
//   }
//  cards(url)
// })

// button.onclick = () => {
//   localStorage.setItem(city, url)
//   window.localStorage.getItem(city)
//   cards(url)
// }


// const cards = () => {
//   axios.get(url).then(res => {
//     let data = res.data
//     let des = res.data.weather[0]
//     let temp = res.data.main
//     let wind = res.data.wind
//     let weather = document.createElement('div')
//     weather.className = 'cards__wrap'
//     weather.innerHTML = `<div class='title'>
//       <h2 class="title__cityName">${data.name}</h2>
//     </div>
//     <div class='weather'>
//       <img class='weather__img' src='http://openweathermap.org/img/wn/${des.icon}@2x.png' alt='weather-icon'/>
//       <h4 class='weather__des'>${des.description}</h4>
//     </div>
//     <div class='temp'>
//       <h4 class='temp__feels-like'>Температура сейчас ${temp.temp}</h4>
//       <h4 class='temp__feels-like'>Ощущается как ${temp.feels_like}</h4>
//       <h4 class='temp__feels-like'>Минимальная температура ${temp.temp_max}</h4>
//       <h4 class='temp__feels-like'>Максимальная температура ${temp.temp_min}</h4>
//     </div>
//     <div class='wind'>
//       <h4 class='wind__deg'>${wind.deg} направление</h4>
//       <h4 class='wind__gust'>Порывы до ${wind.gust}</h4>
//       <h4 class='wind__speed'>Скорость ${wind.speed}</h4>
//     </div>`;
//    cards.appendChild(weather)
//    })
// }