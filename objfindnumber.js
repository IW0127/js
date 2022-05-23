const array1 = { d: 5, f: 12, t: 8, e: 130, u: 44 };

const found = Object.values(array1).find(element => element > 10);

console.log(found);
