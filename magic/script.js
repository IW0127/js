const button = document.querySelectorAll("button");
const box = document.querySelectorAll(".box");
const rand = document.querySelectorAll(".rand");
const answer = document.querySelector("#Answer");

const randomNumber = Math.floor(Math.random() * 100);
let boxWidth = box[0].clientWidth;

const moveBox = () => {
    box.forEach((item) => {
        item.style.transform = "translateX(" + -boxWidth + "px) ";
    });
    boxWidth += box[0].clientWidth;
};

button.forEach((boxId, key) => {
    boxId.addEventListener('click', () => {
        if (boxId.id == "ansBox") {
            this.addEventListener('click', function () {
                this.window.location.href = "./";
            });
        }
        moveBox();

        button[key].parentNode.style.opacity = "0";
        button[key + 1].parentNode.style.opacity = "1";
    });
});

rand.forEach(num => {
    num.innerHTML = randomNumber;
});

answer.innerHTML = Math.floor(randomNumber / 2);


