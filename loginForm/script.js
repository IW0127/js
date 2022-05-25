
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
    },
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
        for (let states in countryStateCity[countrySel.value]) {
            stateSel[stateSel.options.length] = new Option(states, states);
        }
    }
    // countrySel.onchange();
    stateSel.onchange = () => {
        citySel.length = 1;
        i = 0;
        const district = countryStateCity[countrySel.value][stateSel.value];
        while (i < district.length) {
            citySel[citySel.options.length] = new Option(district[i], district[i]);
            i++;
        }
    }
    // console.log(countryStateCity.Object.keys(countryStateCity))
    Object.keys(countryStateCity).forEach(k => {
        // console.log(countryStateCity.Object.keys(countryStateCity. + ` { k }`))
    })
    countrySel.onchange = () => {
        stateSel.length = 1;
        citySel.length = 1;

        for (let i = 0; i < Object.keys(countryStateCity).length; i++) {
            console.log(Object.keys(countryStateCity)[i]);

        }
    }

    stateSel.onchange = () => {
        citySel.length = 1;
        i = 0;
        while (i < countryStateCity[countrySel.value[stateSel]]) {
            console.log(countryStateCity[countrySel.value[stateSel]]);
            i++;
        }
    }
    // countrySel.onchange();
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
    const data = { username, pNumber, email, Password, gender, hobbies, country, state, city };

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


    //email
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
    if ((Password != "")) {
        document.querySelector(".Password").innerHTML = "";
    } else {
        error.push(0);
        document.querySelector(".Password").innerHTML = "Specify Your Password.";
    }
    // gender
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
    }

}


