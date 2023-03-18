
function watch() {
    document.getElementById("container").style.boxShadow = '0px 0px 40px #4FFBDF';

}
setInterval(() => {
    watch()

}, 1000);


let timeInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    //start the timer interval
    timeInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    //stop the timer interval
    clearInterval(timeInterval);
}

function resetTimer() {
    //reset the timer value and update the display..
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    document.getElementById("Timer").innerHTML = "00:00:00";
}

function updateTimer() {
    //update the timer values and display
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const hoursString = hours.toString().padStart(2, "0");
    const minutesString = minutes.toString().padStart(2, "0");
    const secondsString = seconds.toString().padStart(2, "0");


    document.getElementById("Timer").innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
}