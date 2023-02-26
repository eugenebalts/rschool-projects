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
    },
];

const songs = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind'];


// DATE

const time = document.querySelector('.time');
const date = document.querySelector('.date');
let actualDate = new Date();
let currentTime = actualDate.toLocaleTimeString(); // ONLY TIME
const options = {date: 'long',month: 'long', day: 'numeric'};
let currentDate = actualDate.toLocaleDateString('en-US', options);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let timeOfDay;

// GREETING

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');

let randomNum;
let bgNum;

// BACKGROUND

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

// WEATHER 

const weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    weatherDescription = document.querySelector('.weather-description'),
    wind = document.querySelector('.wind'),
    humidity = document.querySelector('.humidity')

const city = document.querySelector('.city');

//QUOTES

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

// AUDIO

const player = document.querySelector('.player'),
    playerPrev = document.querySelector('.play-prev'),
    playerPlay = document.querySelector('.play'),
    playerNext = document.querySelector('.play-next'),
    songName = document.querySelector('.song-name'),
    audio = document.querySelector('.audio'),
    playList = document.querySelector('.play-list');
    progressContainer = document.querySelector('.progress-container')
    progress = document.querySelector('.progress'),
    audioCurrentTime = document.querySelector('.audio-current-time');
    audioLength = document.querySelector('.audio-length')


let songIndex = 0;
const duration = audio.duration;






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
    if (currentHour >= 6 && currentHour < 12) {
        timeOfDay = 'Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = 'Afternoon'
    } else if (currentHour >= 18 && currentHour < 24) {
        timeOfDay = 'Evening'
    } else timeOfDay = 'Night'
    greeting.textContent = `Good ${timeOfDay}, `
}
getTimeOfDay();



//REMEMBER NAME FROM INPUT

name.placeholder = "[Enter name]";
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
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`

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
    // let actualQuoteNumber = randomQuoteNumber;
    let actualQuoteNumber = randomQuoteNumber;
    newRandomQuote = Math.round(Math.random() * (citation.length - 1));
    // randomQuoteNumber = Math.round(Math.random() * (citation.length - 1));
    if (actualQuoteNumber !== newRandomQuote) {
        randomQuoteNumber = newRandomQuote;
    } else {
        randomQuoteNumber = newRandomQuote + 1;
    }

    if (randomQuoteNumber === citation.length) {
        randomQuoteNumber = 0;
    }

    // randomQuoteNumber >= citation.length ? randomQuoteNumber = randomQuoteNumber - 1 : randomQuoteNumber < 0 ? randomQuoteNumber = randomQuoteNumber + 1 : {};

    // console.log(randomQuoteNumber)
    setQuote()
}



// AUDIO


audio.volume = 0.2;

function loadSong(song) {
    audio.src = `assets/sounds/${song}.mp3`
}
loadSong(songs[songIndex]);

songName.textContent = songs[songIndex];

function playAudio() {
    player.classList.add('playing');
    audio.play();
    playerPlay.style.backgroundImage = ' url("assets/svg/pause.svg")';
}

function pauseAudio() {
    player.classList.remove('playing')
    audio.pause();
    playerPlay.style.backgroundImage = ' url("assets/svg/play.svg")';
    
}

playerPlay.addEventListener('click', () => {
    const isPlaying = player.classList.contains('playing');
    if (isPlaying) {
        pauseAudio()
    } else {
        playAudio()
    }
})

function nextAudio() {
    songIndex += + 1;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    songName.textContent = songs[songIndex];
    playAudio();
    songInPlaylist.forEach((song, index) => {
        song.classList.remove('playing');
    })
    songInPlaylist[songIndex].classList.add('playing')
}

function prevAudio() {
    songIndex -= 1;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    songName.textContent = songs[songIndex];
    playAudio();
    songInPlaylist.forEach((song, index) => {
        song.classList.remove('playing');
    })
    songInPlaylist[songIndex].classList.add('playing')
}

playerNext.addEventListener('click', nextAudio);
playerPrev.addEventListener('click', prevAudio);

// SONG PREVIEW



// FILL PLAYLIST
    songs.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add('play-item');
        playList.append(li);
    })

    const songInPlaylist = document.querySelectorAll('.play-item');

// // // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        songInPlaylist.forEach((song, index) => {
            song.addEventListener('click', (e) => {
                songName.textContent = e.target.textContent;
                songInPlaylist.forEach(item => {
                    item.classList.remove('playing');
                })
                e.target.classList.add('playing');
                loadSong(songs[index])
                playAudio()
            })
    })



// Progress bar
function progressBar(event) {


    const {duration, currentTime} = event.srcElement;
    const progressionPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressionPercent}%`;
    // console.log(audio.currentTime)
    audioCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);

    if (audio.currentTime === audio.duration) {
        return nextAudio()
    }
}

function rewindAudio(event) {
    const width = this.clientWidth;
    const push = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (push / width) * duration;
}

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
    ).padStart(2, 0)}`;
}



audio.addEventListener('timeupdate', progressBar)
progressContainer.addEventListener('click', rewindAudio);

audio.addEventListener("loadeddata", () => {
    audioLength.textContent = getTimeCodeFromNum(
        audio.duration
    );
    
    ;
    

    audio.volume = .1;
    },  
    false
);

// song.style.setProperty('--itemBeforeBackImg','url("../assets/svg/play.svg")');



// API BACKGROUND

// function getLinkToImage() {
//     const url = fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=zD3nIyvyKbW6cB3dmNv-j8iXoIbf9_Nhum4eL4L-_UQ')
//     console.log(url)
// }
// getLinkToImage()
