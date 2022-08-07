let remain_time = 5;

let count_number = document.getElementById('count-number');
let start_button = document.getElementById('start-button');
let stop_button = document.getElementById('stop-button');

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

    // stop the timer
    stop_button.addEventListener('click', () => {
        stopTimer();
    });
})

function isTimeZero() {
    remain_time === 0 ? true : false;
}

// count down timer
function countDown() {
    remain_time--;
    count_number.innerHTML = remain_time;
}


// stop the timer
function stopTimer() {
    clearInterval(interval);
}
