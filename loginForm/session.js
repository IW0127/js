const username = sessionStorage.getItem('user');
const login = sessionStorage.getItem('login');

if (username == "") {
    window.location.href = "./";
} 