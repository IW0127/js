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

let n = 1000;
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
for (i = (n - 1); i >= 1; i--) {
    for (let k = n; k >= i; k--) {
        string += " ";
    }
    for (j = i; j >= 1; j--) {
        string += " ";
        string += i;
    }
    string += "\n";
}
console.log(string)