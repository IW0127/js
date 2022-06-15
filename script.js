/* const form = document.myForm;
function validation() {
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const country = form.country.value;

    if (fname == "") {
        document.querySelector(".fname").innerHTML = "First Name can not be left blank."
    } else {
        document.querySelector(".fname").innerHTML = ""
    }
    if (lname == "") {
        document.querySelector(".lname").innerHTML = "Last Name can not be left blank."
    } else {
        document.querySelector(".lname").innerHTML = ""

    }
    if (email == "") {
        document.querySelector(".email").innerHTML = "Email Name can not be left blank."
    } else {
        document.querySelector(".email").innerHTML = ""

    }
    let values = [];
    hobbies.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values == "") {
        document.querySelector(".hobbies").innerHTML = "hobbies can not be left blank.";
    } else {
        document.querySelector(".hobbies").innerHTML = ""

    }

    if (gender == "") {
        document.querySelector(".gender").innerHTML = "Gender Name can not be left blank."
    } else {
        document.querySelector(".gender").innerHTML = ""

    }
    if (country == "") {
        document.querySelector(".country").innerHTML = "Country Name can not be left blank."
    } else {
        document.querySelector(".country").innerHTML = ""
    }


    document.querySelector("#ans").innerHTML = `
    <p>first name : ${fname}</p>
    <p>last name : ${lname}</p>
    <p>email : ${email}</p>
    <p>hobbies : ${values}</p>
    <p>gender : ${gender}</p>
    <p>country : ${country}</p>`

    console.log({ fname, lname, email, gender, country, hobbies: values });
}
function resetFunction() {

    document.myForm.reset();
} */

let arr = [];
let min = 1;
let max = 20000000; let x;
for (let x = 1; x <= 200000000; x++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
}
console.log(arr);
console.log(arr.filter(x => x > 80000))