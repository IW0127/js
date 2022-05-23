const ViewMore = document.querySelectorAll(".Next");

const limed = 10;
let l = 2;
ViewMore.forEach(prev => {
    prev.addEventListener('click', () => {
        show(l);
        limit();
    });
    const limit = () => {
        if (!(l >= limed)) {
            if (limed % 2 == 0) {
                l = l + 2;
            } else {
                l += 2;
                if (l > limed) {
                    l -= 1;
                }
            }
        }
    }
    let s = 1;
    const show = (d) => {
        for (let i = s; i <= d; i++) {
            prev.previousElementSibling.insertAdjacentHTML('beforeend', `<div class="num">${i}</div>`);
            if (limed == (s + 1)) {
                prev.style.display = "none";
            }
            if (i > s) {
                s += 2;
                break;
            }
        }
        const num = document.querySelectorAll(".num");
        num.forEach(n => {
            n.addEventListener('click', () => {
                // n.style.display = "none";
                getPreviousSibling(n);
            });
        });
    }
    show(l);
    limit();

});
const getPreviousSibling = (elem) => {
    while (elem = elem.previousSibling) {
        elem.style.display = "none";
    }
}

