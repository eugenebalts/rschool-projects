// TIME & DATE
const time = document.querySelector('.time');
const date = document.querySelector('.date');
let actualDate = new Date();
let currentTime = actualDate.toLocaleTimeString(); // ONLY TIME
// ONLY DATE
const options = {date: 'long',month: 'long', day: 'numeric'};
let currentDate = actualDate.toLocaleDateString('en-US', options);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let timeOfDay;

const greeting = document.querySelector('.greeting');

const name = document.querySelector('.name');
const body = document.querySelector('body');

let randomNum;
let bgNum;

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

const city = document.querySelector('.city');

const citation = [
    {
        'text': "If life were predictable it would cease to be life and be without flavor." ,
        'author': 'Eleanor Roosevelt',
    },
    {
        'text': "In the end, it's not the years in your life that count. It's the life in your years.",
        'author': 'Abraham Lincoln',
    },
    {
        'text': "Life is a succession of lessons which must be lived to be understood.",
        'author': 'Ralph Waldo Emerson',
    },
    {
        'text': "You will face many defeats in life, but never let yourself be defeated.",
        'author': 'Maya Angelou',
    },
    {
        'text': "Never let the fear of striking out keep you from playing the game.",
        'author': 'Babe Ruth',
    },
    {
        'text': "The only impossible journey is the one you never begin.",
        'author': 'Tony Robbins',
    },
    {
        'text': "Only a life lived for others is a life worthwhile.",
        'author': 'Albert Einstein',
    }
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');







// SHOW TIME FUNCTION

function showTime() {
    actualDate = new Date();
    currentTime = actualDate.toLocaleTimeString();
    time.textContent = currentTime;

    function showDate() {
        let dayOfWeek = actualDate.getDay();
        currentDate = actualDate.toLocaleDateString('en-US', options);
        date.textContent = `${days[dayOfWeek]}, ${currentDate}`;
    }
    showDate();

    setTimeout(showTime, 1000)
}
showTime();


// GREETING

function getTimeOfDay() {
    let currentHour = actualDate.getHours();
    if (currentHour >= 00 && currentHour < 12) {
        timeOfDay = 'Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        timeOfDay = 'Afternoon'
    } else if (currentHour >= 17 && currentHour < 20) {
        timeOfDay = 'Evening'
    } else timeOfDay = 'Night'
    greeting.textContent = `Good ${timeOfDay}`
}
getTimeOfDay();



//REMEMBER NAME FROM INPUT

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

window.addEventListener('load', getLocalStorage);



// SLIDER



function setBg() {
    function getRandomNum() {
        randomNum = Math.round(Math.random() * (20 - 1) + 1);
        bgNum = randomNum.toString().padStart(2, '0');
    }
    getRandomNum();

    backgroundLink = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.toLowerCase()}/${bgNum}.jpg`
    body.style.backgroundImage = `url(${backgroundLink})`
}
setBg()
console.log(bgNum)


slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

function getSlideNext() {
    let result = parseInt(bgNum) + 1;
    if (result > 20) {
        result = 1;
    }
    bgNum = result.toString().padStart(2, '0');
    let img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.toLowerCase()}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`
    }

}

function getSlidePrev() {
    let result = parseInt(bgNum) - 1;
    if (result < 1) {
        result = 20;
    }
    bgNum = result.toString().padStart(2, '0');

    let img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.toLowerCase()}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`
    }
}


// WEATHER APP

// https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=96c3ca9e67a7585cfc7e16b4fb120469&units=metric



async function getWeather() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=96c3ca9e67a7585cfc7e16b4fb120469&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
    if (event.code === 'Enter') {
    getWeather();
    city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('change', getWeather);

function rememberCity() {
    localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', rememberCity);
window.addEventListener('beforeunload', getWeather)

function rememberCityLoad() {
    if (localStorage.getItem('name')) {
        city.value = localStorage.getItem('city');
    }
    if (city.value === '') {
        city.value = 'Minsk';
    }
}

window.addEventListener('load', rememberCityLoad);
window.addEventListener('load', getWeather);




// CITATION 

let randomQuoteNumber = Math.round(Math.random() * (citation.length - 1));
console.log(randomQuoteNumber)

function setQuote() {
    quote.textContent = `"${citation[randomQuoteNumber]['text']}"`;
    author.textContent = `${citation[randomQuoteNumber]['author']}`;
}
setQuote();

changeQuote.addEventListener('click', refreshQuote);

function refreshQuote() {
    let actualQuoteNumber = randomQuoteNumber;
    randomQuoteNumber = Math.round(Math.random() * (citation.length - 1));
    if (actualQuoteNumber === randomQuoteNumber) {
        randomQuoteNumber = randomQuoteNumber + 1;
        
    }
    randomQuoteNumber >= citation.length ? randomQuoteNumber = randomQuoteNumber - 1 : randomQuoteNumber < 0 ? randomQuoteNumber = randomQuoteNumber + 1 : {};

    console.log(randomQuoteNumber)
    setQuote()

}






































