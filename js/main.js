const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0
}

let interval;  // variable for setInterval id
const main_button = document.getElementById('main-button');
let min = document.getElementById('js-minutes');
let sec = document.getElementById('js-seconds');


// start the timer
main_button.addEventListener('click', () => {
    const { action } = main_button.dataset;
    
    if (action === 'start') {
        startTimer();
    } else {
        stopTimer();
    }
});

function getRemainingTime(end_time) {
    const current_time = Date.parse(new Date()); // UTC time
    const difference = end_time - current_time;

    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);

    return {
        total,
        minutes,
        seconds
    }
}

// start the timer
function startTimer() {
    let { total } = timer.remainingTime;
    const end_time = Date.parse(new Date()) + total * 1000; // milliseconds

    if (timer.mode === "pomodoro") timer.sessions++;

    main_button.dataset.action = "stop";
    main_button.textContent = "Stop";
    main_button.classList.add("active");

    // count down per second
    interval = setInterval(() => {
        timer.remainingTime = getRemainingTime(end_time);

        updateClock();

        total = timer.remainingTime.total;

        // stop timer if timer is end
        if (total <= 0) {
            clearInterval(interval);

            switch (timer.mode) {
                case "pomodoro":
                    if (timer.sessions % timer.longBreakInterval === 0) {
                        switchMode('longBreak');
                    } else {
                        switchMode('shortBreak');
                    }
                    break;
                default:
                    switchMode('pomodoro');
            }

            startTimer();
        }
    }, 1000);
}


function updateClock() {
    const { remainingTime } = timer;

    const minutes = `${remainingTime.minutes}`.padStart(2, "0");
    const seconds = `${remainingTime.seconds}`.padStart(2, "0");

    min.textContent = minutes;
    sec.textContent = seconds;

    const text = 
        timer.mode === "pomodoro" ? 'Get back to work' : 'Take a break!';
    document.title = `${minutes}:${seconds} - ${text}`;

}

// stop the timer
function stopTimer() {
    clearInterval(interval);

    main_button.dataset.action = 'start';
    main_button.textContent = 'Start';
    main_button.classList.remove('active');
}

function switchMode(mode) {
    if (interval) {
        stopTimer();
    }

    timer.mode = mode;

    timer.remainingTime = {
        total: timer[mode] * 60, // 25*60, 5*60, 15*60
        minutes: timer[mode], // 25, 5, 15
        seconds: 0 // always 0
    }

    document
        .querySelectorAll('button[data-mode]')
        .forEach((e) => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;

    updateClock();
}

document.addEventListener('DOMContentLoaded', () => {
    switchMode("pomodoro");
})

