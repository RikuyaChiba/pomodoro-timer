const setting_time = 5;
let remain_time = setting_time;

let count_number = document.getElementById('count-number');
let start_button = document.getElementById('start-button');
let stop_button = document.getElementById('stop-button');
let reset_button = document.getElementById('reset-button');

// set the timer value
count_number.innerHTML = remain_time;

// variable for setInterval id
let interval;

// start the timer
start_button.addEventListener('click', () => {

    // count down per second
    interval = setInterval(() => {
        countDown();
        if (remain_time <= 0) {
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
    remain_time--;
    count_number.innerHTML = remain_time;
}

// stop the timer
function stopTimer() {
    clearInterval(interval);
}
