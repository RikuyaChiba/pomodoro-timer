let remain_time = 25;

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
    }, 1000);
    
    // stop the timer
    stopTimer();
})

function countDown() {
    remain_time--;
    count_number.innerHTML = remain_time;
}

// stop the timer
function stopTimer() {
    stop_button.addEventListener('click', () => {
        clearInterval(interval);
    });
}
