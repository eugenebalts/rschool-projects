// TIME & DATE
const time = document.querySelector('.time');
const date = document.querySelector('.date');
let actualDate = new Date();
console.log(date)
let currentTime = actualDate.toLocaleTimeString(); // ONLY TIME
// ONLY DATE
const options = {date: 'long',month: 'long', day: 'numeric'};
let currentDate = actualDate.toLocaleDateString('en-US', options);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 





// SHOW TIME FUNCTION

function showTime() {
    actualDate = new Date();
    currentTime = actualDate.toLocaleTimeString();
    time.textContent = currentTime;

    function showDate() {
        let dayOfWeek = actualDate.getDay();
        date.textContent = `${days[dayOfWeek]}, ${currentDate}`;
    }
    showDate();

    setTimeout(showTime, 1000)
}
showTime();



// SHOW DATE 

// function showDate() {
//     let dayOfWeek = actualDate.getDay();
//     date.textContent = `${days[dayOfWeek]}, ${currentDate}`;
// }




















