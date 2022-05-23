const ViewMore = document.querySelectorAll(".Next");
const num = document.querySelectorAll(".num");
const number = document.querySelectorAll(".number");
ViewMore.forEach(prev => {
    let l = 2;
    prev.addEventListener('click', () => {
        view();
    });
    let view = () => {
        a = 0;
        while (a <= 1) {
            prev.previousElementSibling.children[l].style.display = "block";
            l++; a++;
            let lengthBtn = prev.previousElementSibling.children.length;
            if (l == lengthBtn) {
                prev.style.display = "none";
            }
        }
    };

});
number.forEach(nu => {
    nu.children[0].style.display = "block";
    nu.children[1].style.display = "block";
});
num.forEach(e => {
    e.addEventListener('click', () => {
        while (e = e.previousElementSibling) {
            e.setAttribute("style", "display:none;");
        }
    });
});



