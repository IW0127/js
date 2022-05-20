
// var start = new Date().getTime();

// for (i = 0; i < 5000; ++i) {
//     console.log(i);
//     // 26430
// }
// i = 0;
// while (i < 5000) {
//     console.log(i);
//     ++i;
// }
// 2780
// 21103
//2621
// var end = new Date().getTime();
// var time = end - start;
// console.log('Execution time: ' + time);
// setInterval(() => {

function dk() {
    // var origOpen = XMLHttpRequest.prototype.open;
    // if (XMLHttpRequest.prototype.send) {
    //     (function () {
    //         console.log('request started!');
    //
    // origOpen.apply(this, arguments);
    //     }());
    // };

    XMLHttpRequest.prototype.send = function () {
        console.log('request started!');
        this.addEventListener('load', function () {
            console.log('request completed!');
            console.log(this.readyState); //will always be 4 (ajax is completed successfully)
            // console.log(this.getAll  ResponseHeaders());
            console.log(this.responseText); //whatever the response was
        });
    }
};


dk();

const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    console.log(this.getAllResponseHeaders());
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
