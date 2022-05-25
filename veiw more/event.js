const num = document.getElementById("number");
num.addEventListener('onnumber', e => {
    num.textContent = e.detail.number;
    num.setAttribute('style', `color:${e.detail.textColor}`);
});

const changNum = (n, c) => {
    const event = new CustomEvent('onnumber', {
        detail: {
            number: n,
            textColor: c
        }
    });
    num.dispatchEvent(event);
}
changNum(3, "#fff");