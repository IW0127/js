const countryStateCity = {
    'US': {
        'California': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno'],
        'Florida': ['Jacksonville', 'Miami', 'Tampa', 'St. Petersburg', 'Orlando'],
        'New York': ['New York', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse']
    }, 'INDIA': {
        'Gujarat': ['Surat', 'Rajkot', 'Baroda', 'Ahmedabad'],
        'Assam': ['Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'],
        'Goa': ['Aldona', 'Anjuna', 'Aquem'],
        'Himachal Pradesh': ['Shimla', 'Dharamsala', 'Solan', 'Mandi']
    }, 'CANADA': {
        'Torrento': ['Torrento1', 'Torrento2', 'Torrento3'],
        'Ontario': ['ontario1', 'ontario2', 'ontario3'],
    }
};
window.onload = () => {
    const countrySel = document.myForm.country;
    const stateSel = document.myForm.state;
    const citySel = document.myForm.city;

    for (let cou in countryStateCity) {
        countrySel[countrySel.options.length] = new Option(cou, cou);
    }

    countrySel.onchange = () => {
        stateSel.length = 1;
        citySel.length = 1;
        for (let [key, value] of Object.entries(countryStateCity)) {
            if (key == countrySel.value) {
                for (let [k, v] of Object.entries(value)) {
                    stateSel[stateSel.options.length] = new Option(k, k);
                }
            }
        }

    }

    stateSel.onchange = () => {
        citySel.length = 1;
        i = 0;
        let dis = countryStateCity[countrySel.value][stateSel.value];
        while (i < dis.length) {
            citySel[citySel.options.length] = new Option(dis[i], dis[i]);
            i++;
        }
    }
    // countrySel.onchange();
    /*  document.querySelector('.pass').style.display = "none"; */
};

const showVal = () => {
    document.querySelector('.pass').style = "";
}

const hideVal = () => {
    document.querySelector('.pass').style.display = "none";
}
hideVal();
const Password = document.querySelector("#Password");
let e = [];
function pwd() {
    e = [];
    if (/[A-Z]/g.test(Password.value) && /[a-z]/g.test(Password.value)) {
        document.querySelector(".PasswordUpper").style.color = "green";
    } else {
        document.querySelector(".PasswordUpper").style.color = "red";
        e.push(0);
    }
    if (/[!@#$%^&*_]/g.test(Password.value)) {
        document.querySelector(".PasswordSpecial").style.color = "green";
    } else {
        document.querySelector(".PasswordSpecial").style.color = "red";
        e.push(0);
    }
    if (/[0-9]/g.test(Password.value)) {
        document.querySelector(".PasswordNumber").style.color = "green";
    } else {
        document.querySelector(".PasswordNumber").style.color = "red";
        e.push(0);
    }
    if (Password.value.length >= 8) {
        document.querySelector(".PasswordCharacter").style.color = "green";
    } else {
        document.querySelector(".PasswordCharacter").style.color = "red";
        e.push(0);
    }
}
const validation = () => {

    const formData = new FormData(myForm);
    const username = formData.get("username");
    const pNumber = formData.get('pNumber');
    const email = formData.get("email");
    const Password = btoa(formData.get("Password"));
    const gender = formData.get("gender");
    const hobbies = formData.getAll("hobbies");
    const country = formData.get("country");
    const state = formData.get("state");
    const city = formData.get("city");
    const data = { username, pNumber, email, gender, hobbies, country, state, city };
    let error = [];

    //username
    if (username != "") {
        const regExp = /^[a-zA-Z]+$/;
        const user = regExp.test(username);
        if (user == false) {
            document.querySelector(".username").innerHTML = "space and Number Not allowed!";
            error.push(0);
            console.log(error);
        } else {
            if (localStorage.user != undefined) {
                let jsonD = JSON.parse(localStorage.user);

                for (let x of jsonD) {
                    if (x.username == username) {
                        console.log(x.username);
                        document.querySelector(".username").innerHTML = "Not Available";
                        error.push(0);
                        break;
                    } else {
                        document.querySelector(".username").innerHTML = "";
                    }
                }
            }
        }
    } else {
        document.querySelector(".username").innerHTML = "Please fill Username.";
        error.push(0);
    }

    // Phone number
    if (pNumber != "") {
        const regExp = /^\+?([0-9]{2})?[ ]?([0-9]{10})$/
        if (!pNumber.match(regExp)) {
            document.querySelector(".pNumber").innerHTML = "Invalid Your Phone Number.";
            error.push(0);
        } else {
            document.querySelector(".pNumber").innerHTML = "";
        }
    } else {
        document.querySelector(".pNumber").innerHTML = "Please fill Phone Number.";
        error.push(0);
    }


    /* email */
    if (email != "") {
        const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regExp.test(email)) {
            document.querySelector(".email").innerHTML = "Invalid Email.";
            error.push(0);

        } else {
            document.querySelector(".email").innerHTML = "";
        }
    } else {
        document.querySelector(".email").innerHTML = "Please fill Email.";
        error.push(0);

    }
    let pass = atob(Password);

    if (pass) {
        if (e == "") {
            if (/[^\S]/g.test(pass)) {
                document.querySelector(".Password").innerHTML = "Space Not Allowed.";
                error.push(0);
            } else {
                document.querySelector(".Password").innerHTML = "";
            }
        } else {
            document.querySelector(".Password").innerHTML = "Password Invalid.";
        }
    } else {
        document.querySelector(".Password").innerHTML = "Please fill Password.";
    }


    /* gender */

    if ((gender != null)) {
        document.querySelector(".gender").innerHTML = "";
    } else {
        error.push(0);
        document.querySelector(".gender").innerHTML = "Specify Your Gender.";
    }

    // hobbies
    if (hobbies != "") {
        document.querySelector(".hobbies").innerHTML = "";
    } else {
        error.push(0);
        document.querySelector(".hobbies").innerHTML = "Specify Your hobbies.";
    }

    // country
    if (country != "") {
        document.querySelector(".country").innerHTML = "";
    } else {
        error.push(0);
        document.querySelector(".country").innerHTML = "Specify Your country.";
    }

    // state
    if (state != "") {
        document.querySelector(".state").innerHTML = "";
    } else {
        error.push(0);
        document.querySelector(".state").innerHTML = "Specify Your country.";
    }

    //city
    if (city != "") {
        document.querySelector(".city").innerHTML = "";
    } else {
        error.push(0);
        document.querySelector(".city").innerHTML = "Specify Your country.";
    }


    if (error == "") {
        if (localStorage.user) {
            let oldData = JSON.parse(localStorage.user);
            let newData = JSON.stringify(oldData.concat(data));
            localStorage.setItem('user', newData);
            window.location.href = "./";
        } else {
            let json = JSON.stringify([data]);
            localStorage.setItem('user', json);
        }
        document.myForm.reset();
    }

}



// countrySel.onchange = () => {
//     stateSel.length = 1;
//     citySel.length = 1;
//     for (let states in countryStateCity[countrySel.value]) {
//         stateSel[stateSel.options.length] = new Option(states, states);
//     }
// }
// countrySel.onchange();
// stateSel.onchange = () => {
//     citySel.length = 1;
//     i = 0;
//     const district = countryStateCity[countrySel.value][stateSel.value];
//     while (i < district.length) {
//         citySel[citySel.options.length] = new Option(district[i], district[i]);
//         i++;
//     }
// }


const loginPag = () => { window.location.href = "./" }



// for (let i = 22; i < 30; i++) {
//     for (let j = 1; j < 10; j++) {

//     }

// }