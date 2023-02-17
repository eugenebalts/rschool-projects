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
























