// Create some basic variable first and target the id here
let digClock = document.getElementById("alarmClock");

function updateTime() {
const date = new Date();
const hour = timeFormat(date.getHours());
const minutes = timeFormat(date.getMinutes());
const seconds = timeFormat(date.getSeconds());
digClock.innerText = hour + ":" + minutes + ":" + seconds;
}

// Use 0 for single digit to become two digits
function timeFormat(time) {
    if(time < 10) return "0" + time;
return time;
}

// import audio url here
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4383");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

// To update the time every second
setInterval(updateTime, 1000);

function setAlarmTime(value){
alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const present = new Date();
        const timeOfAlarm = new Date(alarmTime);
//  To make sure alarm time should be greater than present time
        if(timeOfAlarm > present) {
            const timeout = timeOfAlarm.getTime() - present.getTime();
            alarmTimeout = setTimeout(function() {
                audio.play()
            }, timeout);

            alert("Alarm Set!"); 
            
        }
    }
}
function clearAlarm() {
    audio.pause();

    if(alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert("Alarm Cleared!");
    }
}