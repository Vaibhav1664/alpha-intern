
window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate () {
    const timer = document.getElementById('timer');
    alarmSound = document.getElementById('alarmSound');
    const stop = document.getElementById('stopButton');
    
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    
    
    const endTime = new Date(date + " " + time);

    const interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
        
    })
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft);
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        alarmSound.play();
        stopButton.style.display = 'inline';
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
       
    }

    
}

function resetTimer() {
    clearInterval(countdown);
    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    days.innerText = 0;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;

    stopAlarm();
    isRunning = false;
}
