let Days = document.getElementsByClassName('day');
let Hours = document.getElementsByClassName('hour');
let Minutes = document.getElementsByClassName('min');
let Seconds = document.getElementsByClassName('sec');
let BookNow = document.getElementById('bookNow');
let massage = document.getElementsByClassName('massage');
let error = document.getElementsByClassName('error');
let timer = document.getElementsByClassName('timer');
let day;
let hour;
let minute;
let second;

let random = Math.floor((Math.random() * 150) + 1);
document.getElementById('SeatNum').innerHTML = random;

let getTime = localStorage.time;
if (getTime) {
    getTime = JSON.parse(localStorage.time);

    if (getTime) {
        day = getTime.days;
        hour = getTime.hours;
        minute = getTime.minutes;
        second = getTime.seconds;
    }
}

let jsonOffer = localStorage.offer;

if (jsonOffer) {
    jsonOffer = JSON.parse(jsonOffer);
    if (Object.keys(jsonOffer).length > 0) {
        day = jsonOffer.day;
        hour = jsonOffer.hour;
        minute = jsonOffer.minute;
        second = jsonOffer.second;
        Days[0].innerHTML = day;
        Hours[0].innerHTML = hour;
        Minutes[0].innerHTML = minute;
        Seconds[0].innerHTML = second;
    }
}

let offer;
let offerClose = 0;

const timeOffer = () => {
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
        if (hour > 24) {

        }
        Hours[0].innerHTML = hour;
    }
    if (hour > 0 && minute == 0) {
        hour--;
        Hours[0].innerHTML = hour;
        minute = 59;
        Minutes[0].innerHTML = minute;
    }
    if (minute > 0) {
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
    offer = { day, hour, minute, second };
    localStorage.setItem('offer', JSON.stringify(offer));
    if ((day == 0) && (minute == 0) && (hour == 0) && (second == 0)) {
        timer[0].style.display = 'none';
        BookNow.style.cssText = `
        background-color:#686363;
        cursor: not-allowed;`;
        BookNow.disabled = true;
        massage[0].style.display = 'none';
        error[0].style.display = 'block';
        offerClose--;
    }
    if ((offerClose < -1)) {
        localStorage.setItem('offer', '');
        clearInterval(tim);
    }
}

const tim = setInterval(timeOffer, 1000);


const bookTicket = () => {
    if (confirm("conform book your ticket?")) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ seat: random }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                BookNow.style.display = 'none';
                timer[0].style.display = 'none';
                massage[0].innerHTML = "Your ticket is booked.";
                clearInterval(tim);
                localStorage.setItem('offer', '');
                console.log(json);
            })
            .catch(error => console.log('this is error => ', error));
    }
}