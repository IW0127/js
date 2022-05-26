const singIn = () => {
    let userId = document.login.username.value;
    let pass = btoa(document.login.pass.value);

    if (userId && pass) {

        if (localStorage.user) {

            let jsonD = JSON.parse(localStorage.user);

            for (let x of jsonD) {
                if (x.username == userId && x.Password == pass) {
                    document.querySelector(".userPass").innerHTML = "";
                    let loginJson = { userId: btoa(userId), log: true };

                    sessionStorage.setItem('user', JSON.stringify(loginJson));
                    window.location.href = "./login.html";
                    break;

                } else {
                    document.querySelector(".userPass").innerHTML = "try Again.";
                }

            }

        } else {
            document.querySelector(".userPass").innerHTML = "Not Exists User.";
        }


    } else {
        document.querySelector(".userPass").innerHTML = "Username and Password must be fill.";
    }

}

const singUp = () => {
    window.location.href = "./singUp.html";
}
