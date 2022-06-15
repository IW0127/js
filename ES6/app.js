console.clear();
let style = 'background: #0086fb; font-family:cascadia code; font-weight:bold; border-radius:5px; padding:2px;';
console.log('%c ==> ES6 <== ', 'background: #12cb19; font-family:cascadia code; font-weight:bold; border-radius:5px;');

/*  1. Constants  */
console.log("%c =>Constants ", style);
const PI = 3.141593;
console.log(PI);

/* ********************************************************** */

/*  2. Scoping 
    *  Block-scoped variables
    *  block-scoped function
*/
console.log("%c =>Scoping ", style);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function foo() {
    function cool() { return 24 };
    return cool();
}
console.log(foo());

/* ********************************************************** */

/*  3. Arrow function
    * Expression bodies
    * statement bodies
    * lexical this   
*/
console.log("%c =>Arrow function ", style);

const arrow = () => {
    console.log("Expression bodies ");
};
arrow();

let arr = [1, 2, 45, 63];
arr.forEach((element) => {
    console.log(element);
});

console.log(this);

/* ********************************************************** */

/*  4. Extended Parameter Handling
    * Default Parameter Values
    * Rest Parameter
    * Spread Operator
*/

console.log("%c =>Extended Parameter Handling ", style);

const sum = (x, y = 7, z = 42) => {
    return x + y + z
}
console.log(sum(4));

const restParameter = (...arg) => {
    console.log(...arg);
};
restParameter(1, 2, 3, 4, 5, 6, 7);

let str = "foo";
let chars = [...str];
console.log(chars);

/* ********************************************************** */

/*  5. Template Literals
    * String Interpolation
    * Custom Interpolation
    * Raw String Access
*/

console.log('%c =>Template Literals ', style);

const customer = { name: "Foo" };
const card = { amount: 7, product: "Bar", unitPrice: 42 };
let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitPrice} bucks?`;
console.log(message);

function get(array, ...param) {
    console.log(array, param)
    let url = `${array[0]}${param[0]}${array[1]}${param[1]}`;
    console.log(`url:`, url);
}
let bar = `hello`;
let baz = `guys`;
let asd = `Welcome`;
get`http://example.com/foo?bar=${bar + baz}&quux=${asd}`;


function quux(strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    console.log(strings.raw[0] === "foo\\n")
    strings.raw[1] === "bar"
    values[0] === 42
    console.log(strings.raw, strings, values);
}
quux`foo\n${42}bar${78}`;

/* ********************************************************** */

/*  6. Extended Literals
    * Binary & Octal Literal
    * Unicode String & RegExp Literal
*/
console.log('%c =>Extended Literals ', style);

console.log(0b111110111);
console.log(0o767);

console.log(`Compare "😀".length === 2:`, "😀".length === 2);
console.log(`Compare "😀".match(/./u)[0].length === 2:`, "😀".match(/./u)[0].length === 2);
console.log(`Compare "😀" === "\\uD842\\uDFB7":`, "😀" === "\uD83D\uDE00");
console.log(`Compare "😀" === "\\u{20BB7}":`, "😀" === "\u{1f600}");
console.log(`Compare "😀".codePointAt(0) == 0x1f600:`, "😀".codePointAt(0) == 0x1f600);
for (let codepoint of "😀") console.log(`Value codepoint:`, codepoint);

/* ********************************************************** */

/*  7. Enhanced Regular Expression
    * Regular Expression Sticky Matching
*/
console.log('%c =>Enhanced Regular Expression ', style);

let parser = (input, match) => {
    for (let pos = 0, lastPos = input.length; pos < lastPos;) {
        let matchLength = match.length;
        for (let i = 0; i < matchLength; i++) {
            match[i].pattern.lastIndex = pos;
            let found = match[i].pattern.exec(input);
            if (found !== null) {
                match[i].action(found)
                pos = match[i].pattern.lastIndex
                break;
            }
        }
    }
}

let report = (match) => {
    console.log(JSON.stringify(match))
}
parser("Foo 1 Bar 7 Baz 42", [
    { pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /\s*/y, action: (match) => { report(match) } }
]);


/* ********************************************************** */

/*  8. Enhanced Object Properties
    * Property Shorthand
    * Computed Property Names
    * Method Properties
*/
console.log('%c =>Enhanced Object Properties ', style);

let x = 0;
let y = 0;
const obj = { x, y };

console.log(obj);

/* ********************************************************** */

/*  9. Destructuring Assignment
    * Array Matching
    * Object Matching, Shorthand Notation
    * Object Matching, Deep Matching
    * Object And Array Matching, Default Values
    * Parameter Context Matching
    * Fail-Soft Destructuring
*/
console.log('%c =>Destructuring Assignment ', style);


/* ********************************************************** */

/*  10. Modules
    * Value Export/Import
    * Default & Wildcard
*/

console.log('%c =>Modules ', style);


/* ********************************************************** */

/*  11. Classes
    * Class Definition
    * Class Inheritance
    * Class Inheritance, From Expressions
    * Base Class Access
    * Static Members
    * Getter/Setter
*/

console.log('%c =>Classes ', style);

/* ********************************************************** */


/*  12. Symbol Type
    * Symbol Type
    * Global Symbols
*/
console.log('%c =>Symbol Type ', style);

/* ********************************************************** */

/*  13. Iterators
    * Iterator & For-Of Operator
*/
console.log('%c =>Iterators ', style);

/* ********************************************************** */

/*  14. Generators
    * Generator Function, Iterator Protocol
    * Generator Function, Direct Use
    * Generator Matching
    * Generator Control-Flow
    * Generator Methods
*/
console.log('%c =>Generators ', style);

/* ********************************************************** */

/*  15. Map/Set & WeakMap/WeakSet
    * Set Data-Structure
    * Map Data-Structure
    * Weak-Link Data-Structures
*/
console.log('%c =>Map/Set & WeakMap/WeakSet ', style);

/* ********************************************************** */

/*  14. Typed Arrays
    * Typed Arrays
*/
console.log('%c =>Typed Arrays ', style);

/* ********************************************************** */

/*  15. New Built-In Methods
    * Object Property Assignment
    * Array Element Finding
    * String Repeating
    * String Searching
    * Number Type Checking
    * Number Safety Checking
    * Number Comparison
    * Number Truncation
    * Number Sign Determination
*/
console.log('%c =>New Built-In Methods ', style);

/* ********************************************************** */

/*  16. Promises
    * Promise Usage
    * Promise Combination
*/
console.log('%c =>Promises ', style);

/* ********************************************************** */

/*  17. Meta-Programming
    * Proxying
    * Reflection
*/
console.log('%c =>Meta-Programming ', style);

/* ********************************************************** */

/*  18. Internationalization & Localization
    * Collation
    * Number Formatting
    * Currency Formatting
    * Date/Time Formatting
*/
console.log('%c =>Internationalization & Localization ', style);
