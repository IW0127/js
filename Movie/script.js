let Days = document.getElementsByClassName('day');
let Hours = document.getElementsByClassName('hour');
let Minutes = document.getElementsByClassName('min');
let Seconds = document.getElementsByClassName('sec');
let BookNow = document.getElementById('bookNow');
let massage = document.getElementsByClassName('massage');
let error = document.getElementsByClassName('error');
let timer = document.getElementsByClassName('timer');
let d = 0;

let T = JSON.parse(localStorage.time);
let day;
let hour;
let minute;
let second;

if (T) {
    day = T.days;
    hour = T.hours;
    minute = T.minutes;
    second = T.seconds;
}
const timeOffer = () => {
    if ((day == 0) && (minute == 0) && (hour == 0) && (second == 0)) {
        timer[0].style.display = 'none';
        BookNow.style.cssText = `
        background-color:#686363;
        cursor: not-allowed;`;
        BookNow.disabled = true;
        massage[0].style.display = 'none';
        error[0].style.display = 'block';
        d--;
    }
    if ((d < -1)) {
        error[0].style.display = 'none';
        clearInterval(tim);
    }
    if (day > 0) {
        Days[0].innerHTML = day;
    }
    if (day > 0 && hour == 0) {
        day--;
        Days[0].innerHTML = day;
        hour = 24;
        Hours[0].innerHTML = hour;
    }

    if (hour > 0) {
        Hours[0].innerHTML = hour;
    }
    if (hour > 0 && minute == 0) {
        hour--;
        Hours[0].innerHTML = hour;
        minute = 59;
        Minutes[0].innerHTML = minute;
    }

    if (second == 0 && minute != 0) {
        minute--;
        Minutes[0].innerHTML = minute;
        second = 60;
    }
    if (second > 0) {
        second--;
        Seconds[0].innerHTML = second;
    }
}

const tim = setInterval(timeOffer, 1000);
