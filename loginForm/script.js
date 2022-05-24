
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
        for (let states in countryStateCity[countrySel.value]) {
            stateSel[stateSel.options.length] = new Option(states, states);
        }
    }
    countrySel.onchange();
    stateSel.onchange = () => {
        citySel.length = 1;
        i = 0;
        const district = countryStateCity[countrySel.value][stateSel.value];
        while (i < district.length) {
            citySel[citySel.options.length] = new Option(district[i], district[i]);
            i++;
        }
    }
}

const validation = () => {

    const formData = new FormData(myForm);
    const username = formData.get("username");
    const pNumber = formData.get('pNumber');
    const email = formData.get("email");
    const gender = formData.get("gender");
    const hobbies = formData.getAll("hobbies");
    const country = formData.get("country");
    const state = formData.get("state");
    const city = formData.get("city");
    const all = { username, pNumber, email, gender, hobbies, country, state, city };
    console.log(all);

    if (username != "") {
        const regExp = /^[a-zA-Z]+$/;
        const user = regExp.test(username);
        if (user == false) {
            document.querySelector(".username").innerHTML = "space and Number Not allowed!";
        } else {
            document.querySelector(".username").innerHTML = "";
        }
    } else {
        document.querySelector(".username").innerHTML = "Please fill Username.";

    }

    if (pNumber != "") {
        const regExp = /^\+?([0-9]{2})?[ ]?([0-9]{10})$/
        if (!pNumber.match(regExp)) {
            document.querySelector(".pNumber").innerHTML = "Invalid Your Phone Number.";
        } else {
            document.querySelector(".pNumber").innerHTML = "";
        }
    } else {
        document.querySelector(".pNumber").innerHTML = "Please fill Phone Number.";
    }


    if (email != "") {
        const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regExp.test(email)) {
            document.querySelector(".email").innerHTML = "Invalid Email.";

        } else {
            document.querySelector(".email").innerHTML = "";

        }
    } else {
        document.querySelector(".email").innerHTML = "Please fill Email.";

    }

    if ((gender != null)) {
        document.querySelector(".gender").innerHTML = "";
    } else {
        document.querySelector(".gender").innerHTML = "Specify Your Gender.";
        console.log("yes");
    }

    if (hobbies != "") {
        document.querySelector(".hobbies").innerHTML = "";
    } else {
        document.querySelector(".hobbies").innerHTML = "Specify Your hobbies.";
    }
    if (hobbies != "") {
        document.querySelector(".hobbies").innerHTML = "";
    } else {
        document.querySelector(".hobbies").innerHTML = "Specify Your hobbies.";
    }
}