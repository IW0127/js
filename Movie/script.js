let Days = document.getElementsByClassName('day');
let Hours = document.getElementsByClassName('hour');
let Minutes = document.getElementsByClassName('min');
let Seconds = document.getElementsByClassName('sec');
let BookNow = document.getElementById('bookNow');

let day = 0;
let hour = 0;
let minute = 0;
let second = 20;
const timeOffer = () => {
    if ((day == 0) && (minute == 0) && (hour == 0) && (second == 0)) {
        clearInterval(d);
        #686363/*  */
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

const d = setInterval(timeOffer, 1000);
console.log(Days);
