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
        let k = 1;
        // while (e = e.nextElementSibling) {
        //     console.log(e);
        //     e.setAttribute("style", "display:block;");

        //     if (k == 2)
        //         break;
        //     k++;

        // }
        let i = 1;
        let l = e;
        while ((e = e.previousElementSibling) && (l = l.nextElementSibling)) {
            if (l) {
                l.setAttribute("style", "display:block;");

            }
            if (e) {
                e.setAttribute("style", "display:none;");

                console.log(e, "none");
                console.log(l, "block");

                // if (e.previousElementSibling.style.display == 'none') {
                //     e.previousElementSibling.previousElementSibling.setAttribute("style", "display:none;");
                // } else {
                //     e.previousElementSibling.previousElementSibling.setAttribute("style", "display:none;");
                //     console.log("yes");
                // }
            }

            // l.setAttribute("style", "display:block;");
            if (i == 2)
                break;
            i++;

        }

    });
});



