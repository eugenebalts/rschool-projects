// TIME & DATE
const time = document.querySelector('.time');
const date = document.querySelector('.date');
let actualDate = new Date();
let currentTime = actualDate.toLocaleTimeString(); // ONLY TIME
// ONLY DATE
const options = {date: 'long',month: 'long', day: 'numeric'};
let currentDate = actualDate.toLocaleDateString('en-US', options);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeOfDay = ['Morning', 'Afternoon', 'Evening', 'Night'];

const greeting = document.querySelector('.greeting');

const name = document.querySelector('.name');







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
        greeting.textContent = `Good ${timeOfDay[0]}`
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting.textContent = `Good ${timeOfDay[1]}`
    } else if (currentHour >= 17 && currentHour < 20) {
        greeting.textContent = `Good ${timeOfDay[2]},`
    } else greeting.textContent = `Good ${timeOfDay[3]},`
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
























