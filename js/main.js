const setting_time = 5;

let minutes = 1;

let seconds = 10;

let remain_time = setting_time;

let count_number = document.getElementById('count-number');
let start_button = document.getElementById('start-button');
let stop_button = document.getElementById('stop-button');
let reset_button = document.getElementById('reset-button');

// variable for setInterval id
let interval;

// init timer 
count_number.innerHTML = `0${minutes}:00`;

// start the timer
start_button.addEventListener('click', () => {
    
    minutes --;

    // count down per second
    interval = setInterval(() => {

        countDown();

        // stop timer if time is 
        if(isTimeEnd()) {
            stopTimer();
        }
    }, 1000);

});

// reset the timer
reset_button.addEventListener('click', () => {
    stopTimer();
    remain_time = setting_time;
    count_number.innerHTML = remain_time;
});

// stop the timer;
stop_button.addEventListener('click', () => {
    stopTimer();
});

// count down timer
function countDown() {
    if(seconds === 0) {
        minutes--;
        seconds = 60;
    }

    seconds--;
    
    if(getNumberDigits(seconds) === 1) {
        count_number.innerHTML = `0${minutes}:0${seconds}`;
    } else {
        count_number.innerHTML = `0${minutes}:${seconds}`;
    }
}

// stop the timer
function stopTimer() {
    clearInterval(interval);
}

// get number Digits
function getNumberDigits(seconds) {
    return String(seconds).length;
}

// 
function isTimeEnd() {
    if(minutes === 0 && seconds === 0) {
        return true;
    }
    return false;
}