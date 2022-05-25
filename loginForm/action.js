const singIn = () => {
    let userId = document.login.username.value;
    let pass = btoa(document.login.pass.value);
    if (userId != "" && pass != "") {
        if (localStorage.user != undefined) {
            if (localStorage.user != undefined) {
                let jsonD = JSON.parse(localStorage.user);
                for (let x of jsonD) {
                    if (x.username == userId && x.Password == pass) {
                        document.querySelector(".userPass").innerHTML = "";
                        sessionStorage.setItem('user', userId);
                        sessionStorage.setItem('log', true);

                        window.location.href = "./login.html";
                        break;
                    } else {
                        document.querySelector(".userPass").innerHTML = "try Again.";
                        userId = "";
                        pass = ""
                    }
                }
            }
        }

    } else {
        document.querySelector(".userPass").innerHTML = "Username and Password must be fill.";
    }

}

const singUp = () => {
    window.location.href = "./singUp.html";
}
