const userSession = sessionStorage.getItem('user');
let i = 0;

if (userSession) {
    let userJson = JSON.parse(userSession);
    let userName = atob(userJson.userId);
    let log = userJson.log;

    let localStor = JSON.parse(localStorage.user);

    for (let local of localStor) {
        if (userName == local.username && log == true) {
            i++;
        }
    }
}

