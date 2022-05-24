
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
    const email = formData.get("email");
    const gender = formData.get("gender");
    const hobbies = formData.getAll("hobbies");
    const country = formData.get("country");
    const state = formData.get("state");
    const city = formData.get("city");
    const all = { username, email, gender, hobbies, country, state, city };
    console.log(all);

}