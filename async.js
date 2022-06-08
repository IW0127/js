/* const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
}
const fruitsToGet = ['apple', 'grape', 'pear']
const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getNumFruit = fruit => {
    return sleep(1000).then(v => fruitBasket[fruit])
}
const forLoop = async () => {
    console.log('Start')

    for (let index = 0; index < fruitsToGet.length; index++) {
        const fruit = fruitsToGet[index]
        const numFruit = await getNumFruit(fruit)
        console.log(numFruit)
    }

    console.log('End')
}
const forEachLoop = async () => {
    console.log('Start')

    fruitsToGet.forEach(async fruit => {
        const numFruit = await getNumFruit(fruit)
        console.log(numFruit)
    })

    console.log('End')
}

forLoop();

forEachLoop(); */

/* let n = 5;
let string = ""
for (i = 1; i <= n; i++) {
    for (let k = n; k >= i; k--) {
        string += " ";
    }
    for (j = 1; j <= i; j++) {
        string += " ";
        string += i;
    }
    string += "\n";
}
for (i = 1; i <= n; i++) {
    for (let k = n; k >= i; k--) {
        document.write(" ");
    }
    for (j = 1; j <= i; j++) {
        document.write(" ");
        document.write(i);
    }
    document.write("<br/>")
} */
/* for (i = (n - 1); i >= 1; i--) {
    for (let k = n; k >= i; k--) {
        string += " ";
    }
    for (j = i; j >= 1; j--) {
        string += " ";
        string += i;
    }
    string += "\n";
} */
// console.log(string)

let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

// Step 2: get total length
const contentLength = +response.headers.get('Content-Length');

// Step 3: read the data
let receivedLength = 0; // received that many bytes at the moment
let chunks = []; // array of received binary chunks (comprises the body)
while (true) {
    const { done, value } = await reader.read();

    if (done) {
        break;
    }

    chunks.push(value);
    receivedLength += value.length;

    console.log(`Received ${receivedLength} of ${contentLength}`)
}

// Step 4: concatenate chunks into single Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for (let chunk of chunks) {
    chunksAll.set(chunk, position); // (4.2)
    position += chunk.length;
}

// Step 5: decode into a string
let result = new TextDecoder("utf-8").decode(chunksAll);

// We're done!
let commits = JSON.parse(result);
alert(commits[0].author.login);