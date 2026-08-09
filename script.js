const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalTime = document.querySelector('#digital-time');
const dateElement = document.querySelector('#date');

const pad = (value) => String(value).padStart(2, '0');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const secondDegrees = (seconds + milliseconds / 1000) * 6;
    const minuteDegrees = (minutes + seconds / 60) * 6;
    const hourDegrees = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    digitalTime.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    dateElement.textContent = now.toLocaleDateString(undefined, {
        weekday: 'long', month: 'long', day: 'numeric'
    });
}

updateClock();
setInterval(updateClock, 50);
