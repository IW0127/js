let Days = document.getElementsByClassName('day');
let Hours = document.getElementsByClassName('hour');
let Minutes = document.getElementsByClassName('min');
let Seconds = document.getElementsByClassName('sec');
let BookNow = document.getElementById('bookNow');
let massage = document.getElementsByClassName('massage');
let error = document.getElementsByClassName('error');
let timer = document.getElementsByClassName('timer');
let ticketBox = document.getElementsByClassName('ticketBox');
let discount = document.getElementsByClassName('price');
let day;
let hour;
let minute;
let second;

let random = Math.floor((Math.random() * 150) + 1);
document.getElementById('SeatNum').innerHTML = random;

let getTime = localStorage.time;
let daySeconds = 86400;
let hourSeconds = 3600;
let minuteSeconds = 60;




if (getTime) {
    getTime = JSON.parse(localStorage.time);
    let getSeconde = getTime.currentTime;
    if (getTime) {
        day = Math.floor(getSeconde / daySeconds);
        hour = Math.floor((getSeconde - day * daySeconds) / hourSeconds);
        minute = Math.floor((getSeconde - day * daySeconds - hour * hourSeconds) / minuteSeconds);
        second = getSeconde - day * daySeconds - hour * hourSeconds - minute * minuteSeconds;
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
        if (day < 10) {
            Days[0].innerHTML = '0' + day;
        } else {
            Days[0].innerHTML = day;
        }
        if (hour < 10) {
            Hours[0].innerHTML = '0' + hour;
        } else {
            Hours[0].innerHTML = hour;
        }
        if (minute < 10) {
            Minutes[0].innerHTML = '0' + minute;

        } else {
            Minutes[0].innerHTML = minute;
        }
        if (second < 10) {
            Seconds[0].innerHTML = '0' + second;

        } else {
            Seconds[0].innerHTML = second;
        }
    }
}

let offer;
let offerClose = 0;

const timeOffer = () => {

    if (localStorage.time) {


        if (day > 0) {
            if (day < 10) {
                Days[0].innerHTML = '0' + day;
            } else {
                Days[0].innerHTML = day;
            }
        }
        if (day > 0 && hour == 0) {
            day--;
            if (day < 10) {
                Days[0].innerHTML = '0' + day;
            } else {
                Days[0].innerHTML = day;
            }
            hour = 24;
            Hours[0].innerHTML = hour;
        }

        if (hour > 0) {
            if (hour < 10) {
                Hours[0].innerHTML = '0' + hour;
            } else {
                Hours[0].innerHTML = hour;
            }
        }
        if (hour > 0 && minute == 0) {
            hour--;
            if (hour < 10) {
                Hours[0].innerHTML = '0' + hour;
            } else {
                Hours[0].innerHTML = hour;
            }
            minute = 59;
            Minutes[0].innerHTML = minute;
        }
        if (minute > 0) {
            if (minute < 10) {
                Minutes[0].innerHTML = '0' + minute;

            } else {
                Minutes[0].innerHTML = minute;
            }
        }
        if (second == 0 && minute > 0) {
            minute--;
            if (minute < 10) {
                Minutes[0].innerHTML = '0' + minute;

            } else {
                Minutes[0].innerHTML = minute;
            }
            second = 60;
        }
        if (second > 0) {
            second--;
            if (second < 10) {
                Seconds[0].innerHTML = '0' + second;

            } else {
                Seconds[0].innerHTML = second;
            }
        }
        offer = { day, hour, minute, second };
        localStorage.setItem('offer', JSON.stringify(offer));
        if (!localStorage.time) {
            clearInterval(tim);
            localStorage.setItem('offer', '');
            console.log("yes");
            Seconds[0].innerHTML = '00';
            Minutes[0].innerHTML = '00';
            Hours[0].innerHTML = '00';
            Days[0].innerHTML = '00';
        }
        if ((day == 0) && (minute == 0) && (hour == 0) && (second == 0)) {
            switch (getTime.option) {
                case 'hide':
                    ticketBox[0].style.display = 'none';
                    massage[0].style.display = 'none';
                    error[0].style.display = 'block';
                    break;
                case 'error':
                    massage[0].style.display = 'none';
                    error[0].style.display = 'block';
                    BookNow.style.cssText = `
                background-color:#686363;
                cursor: not-allowed;`;
                    BookNow.disabled = true;
                    break;
                case 'timer':
                    // timer[0].style.display = 'none';
                    // timer[0].style.display = 'none'
                    timer.length ? timer[0].style.display = 'none' : '';
                    // checkClass("timer[0].style = 'display:none;'");
                    break;
                case 'restart':
                    let getSeconde = getTime.currentTime;
                    day = Math.floor(getSeconde / daySeconds);
                    hour = Math.floor((getSeconde - day * daySeconds) / hourSeconds);
                    minute = Math.floor((getSeconde - day * daySeconds - hour * hourSeconds) / minuteSeconds);
                    second = getSeconde - day * daySeconds - hour * hourSeconds - minute * minuteSeconds;
                    break;
                case 'discount':
                    if (discount.length) {
                        massage[0].style.display = 'none';
                        error[0].style.display = 'block';
                        discount[0].innerHTML = '₹340';
                    }
                    break;
                default:
                    console.log('default');
                    break;
            }

            if (getTime.option != 'restart') {
                localStorage.setItem('offer', '');
                clearInterval(tim);
            }
        }
    } else {
        localStorage.setItem('offer', '');
        Days[0].innerHTML = '00';

        Hours[0].innerHTML = '00';

        Minutes[0].innerHTML = '00';


        Seconds[0].innerHTML = '00';


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

/* 
let checkId = (ids, targetsId) => {
    if (ids) {
        targetsId;
    }
} 
let checkClass = (classes,targetsClass) => {
    // if (classes.length) {
    //     targetsClass;
    //     console.log(targetsClass);
    // }
    // console.log(targetsClass);
    /* if (classes.length) {
        console.log("yes");
        targetsClass;
    } else {
        console.log(targetsClass);
    }
    // eval(targetsClass);
    // console.log(targetsClass.replaceAll(/[""]+/g, ''));
    
}


*/