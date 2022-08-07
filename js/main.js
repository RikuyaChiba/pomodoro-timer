// Pomodoro work time
const work_time = 25;

// Pomodoro break time
const break_time = 5;

let minutes = work_time;

let seconds = 60;

let remain_time = work_time;

let count_number = document.getElementById('count-number');
let start_button = document.getElementById('start-button');
let stop_button = document.getElementById('stop-button');
let reset_button = document.getElementById('reset-button');
let finish_notion = document.getElementById('finish-notion')

// variable for setInterval id
let interval;

// minutes format 
let minutes_format;

// seconds format
let seconds_format;

// init timer 
count_number.innerHTML = `${minutes}:00`;

// start the timer
start_button.addEventListener('click', () => {

    minutes--;

    // count down per second
    interval = setInterval(() => {

        countDown();

        // stop timer if timer is end
        if (isTimeEnd()) {
            stopTimer();
            finish_notion.classList.remove('hide');
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
    if (seconds === 0) {
        minutes--;
        seconds = 60;
    }

    seconds--;

    minutes_format = formatTime(minutes);
    seconds_format = formatTime(seconds);

    timer_format = `${minutes_format}:${seconds_format}`;

    count_number.innerHTML = timer_format;
}

// stop the timer
function stopTimer() {
    clearInterval(interval);
}

// get number Digits
function getNumberDigits(seconds) {
    return String(seconds).length;
}

// judge if timer is end
function isTimeEnd() {
    if (minutes === 0 && seconds === 0) {
        return true;
    }
    return false;
}

function formatTime(time) {
    return getNumberDigits(time) === 1 ? `0${time}` : time;
}
