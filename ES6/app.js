
console.clear();
let style = 'background: #0086fb; font-family:cascadia code; font-weight:bold; border-radius:5px; padding:2px;';
let styleSub = 'background: coral; font-family:cascadia code; font-weight:bold; border-radius:5px; padding:2px;';
console.log('%c ==> ⚡ ES6 ⚡ <== ', 'background: #12cb19; font-family:cascadia code; font-weight:bold; border-radius:5px; padding: 2px;');

/*  1. Constants  */
console.log("%c => Constants ", style);
console.log("%c • Constants ", styleSub);
const PI = 3.141593;
console.log(PI);

/* ********************************************************** */

/*  2. Scoping 
    *  Block-scoped variables
    *  block-scoped function
*/
console.log("%c => Scoping ", style);

console.log("%c • Block-scoped variables ", styleSub);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("%c • block-scoped function ", styleSub);

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
console.log("%c => Arrow function ", style);
console.log("%c • Expression bodies ", styleSub);

const arrow = () => {
    console.log("Expression bodies ");
};
arrow();

console.log("%c • statement bodies ", styleSub);

let arr = [1, 2, 45, 63];
arr.forEach((element) => {
    console.log(element);
});

console.log("%c • lexical this ", styleSub);
var obj = {
    fname: 'jone',
    lname: 'dev',
    fullName: function () {
        return `${this.fname} ${this.lname}`
    }
}
console.log(obj.fullName());

/* ********************************************************** */

/*  4. Extended Parameter Handling
    * Default Parameter Values
    * Rest Parameter
    * Spread Operator
*/

console.log("%c => Extended Parameter Handling ", style);
console.log("%c • Default Parameter Values ", styleSub);

var sum = (x, y = 7, z = 42) => {
    return x + y + z
}
console.log(sum(4));

console.log("%c • Rest Parameter ", styleSub);

const restParameter = (...arg) => {
    console.log(arg);
};
restParameter(1, 2, 3, 4, 5, 6, 7);

console.log("%c • Spread Operator ", styleSub);

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
console.log("%c • String Interpolation ", styleSub);

const customer = { name: "Foo" };
const card = { amount: 7, product: "Bar", unitPrice: 42 };
let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitPrice} bucks ? `;
console.log(message);

console.log("%c • Custom Interpolation ", styleSub);

function get(array, ...param) {
    console.log(array, param)
    let url = `${array[0]}${param[0]}${array[1]}${param[1]} `;
    console.log(`url: `, url);
}
let bar = `hello`;
let baz = `guys`;
let asd = `Welcome`;
get`http://example.com/foo?bar=${bar + baz}&quux=${asd}`;


console.log("%c • Raw String Access ", styleSub);

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
console.log('%c => Extended Literals ', style);

console.log("%c • Binary & Octal Literal ", styleSub);

console.log(0b111110111);
console.log(0o767);

console.log("%c • Unicode String & RegExp Literal ", styleSub);


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
console.log("%c • Constants ", styleSub);

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
    console.log(match)
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
console.log("%c • Property Shorthand ", styleSub);

var x = 0;
var y = 0;
var obj = { x, y };
console.log(obj);

console.log("%c • Computed Property Names ", styleSub);

var quu = () => 9;
var obj2 = {
    foo: "bar",
    ["baz" + quu()]: 42
};
console.log('Value obj2:', obj2);

console.log("%c • Method Properties ", styleSub);

var obj3 = {
    foo(a, b) {
        return a + b;
    },
    bar(x, y) {
        return x * y;
    },
    *quux2(x, y) {
        return x + y;
    }
};

console.log(`Value obj3:`, obj3.quux2(3, 4));
/* ********************************************************** */

/*  9. Destructuring Assignment
    * Array Matching
    * Object Matching, Shorthand Notation
    * Object Matching, Deep Matching
    * Object And Array Matching, Default Values
    * Parameter Context Matching
    * Fail-Soft Destructuring
*/

console.log('%c => Destructuring Assignment ', style);

console.log('%c • Array Matching ', styleSub);

var list = [1, 2, 3];
var [a, , b] = list;
console.log('Value a:', a);
console.log('Value b:', b);
[b, a] = [a, b];
console.log('Value a:', a);
console.log('Value b:', b);

console.log('%c • Object Matching, Shorthand Notation ', styleSub);

function getASTNode() {
    return { op: 1, lhs: 2, rhs: 3 };
};
var { op, lhs, rhs } = getASTNode();
console.log('Value op:', op);
console.log('Value lhs:', lhs);
console.log('Value rhs:', rhs);

console.log('%c • Object Matching, Deep Matching ', styleSub);

function getASTNode2() {
    return { op: 1, lhs: { op: 2 }, rhs: 3 };
};
var { op: a, lhs: { op: b }, rhs: c } = getASTNode2();
console.log(`Value a:`, a);
console.log(`Value b:`, b);
console.log(`Value c:`, c);


console.log('%c • Object And Array Matching, Default Values ', styleSub);

var obj = { a: 1 };
var { a, b = 2 } = obj;

console.log(`Value a:`, a);
console.log(`Value b:`, b);

var list = [1];
var [x, y = 2] = list;

console.log(`Value x:`, x);
console.log(`Value y:`, y);

console.log('%c • Parameter Context Matching ', styleSub);

function f([name, val]) {
    console.log(name, val);
}

function g({ name: n, val: v }) {
    console.log(n, v);
}

function h({ name, val }) {
    console.log(name, val);
}

f(["bar", 42]);
g({ name: "foo", val: 7 });
h({ name: "bar", val: 42 });

console.log('%c • Fail-Soft Destructuring ', styleSub);

var list = [7, 42];
var [a = 1, b = 2, c = 3, d] = list;
console.log('Compare a === 7:', a === 7);
console.log('Compare b === 42:', b === 42);
console.log('Compare c === 3:', c === 3);
console.log('Compare d === undefined:', d === undefined);


/* ********************************************************** */

/*  10. Modules
    * Value Export/Import
    * Default & Wildcard
*/

console.log('%c => Modules ', style);
console.log('%c • Value Export/Import ', styleSub);

import * as math from "./lib/math.js";
import { sumV, pi } from "./lib/math.js";

console.log("2π = ", math.sumV(math.pi, math.pi));
console.log("2π = ", sumV(pi, pi));

console.log('%c • Default & Wildcard ', styleSub);

import exp from "./lib/math.js";
console.log(exp(3))


/* ********************************************************** */

/*  11. Classes
    * Class Definition
    * Class Inheritance
    * Class Inheritance, From Expressions
    * Base Class Access
    * Static Members
    * Getter/Setter
*/

console.log('%c => Classes ', style);
console.log('%c • Class Definition ', styleSub);

class Shape1 {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    getPos() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

let shape = new Shape1(1, 10, 20);
console.log('Shape pos:', shape.getPos());
shape.move(15, 35);
console.log('Shape pos:', shape.getPos());

console.log('%c • Class Inheritance ', styleSub);


class Rectangle extends Shape1 {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return {
            width: this.width,
            height: this.height
        };
    }
}

class Circle extends Shape1 {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}

let rectangle = new Rectangle(2, 11, 21, 100, 200);
console.log('Rectangle size:', rectangle.getSize());

let circle = new Circle(2, 80, 90, 50);
console.log('Circle pos:', circle.getPos());


console.log('%c • Class Inheritance, From Expressions ', styleSub);

var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor(...args) {
            super(...args);
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this);
            });
        }
    };
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    return
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
            })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

class Colored {
    initializer() {
        this._color = 'white';
    }
    get color() {
        return this._color;
    }
    set color(v) {
        this._color = v;
    }
}

class ZCoord {
    initializer() {
        this._z = 0;
    }
    get z() {
        return this._z;
    }
    set z(v) {
        this._z = v;
    }
}

class Shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(v) {
        this._x = v;
    }
    get y() {
        return this._y;
    }
    set y(v) {
        this._y = v;
    }
}

class Rectangle1 extends aggregation(Shape, Colored, ZCoord) { };

var rect = new Rectangle1(7, 42);
rect.z = 1000;
rect.color = 'red';
console.log(`Rectangle data:
    pos x: ${rect.x}
    pos y: ${rect.y}
    pos z: ${rect.z}
    color: ${rect.color}`);


console.log('%c • Base Class Access ', styleSub);


class Shape2 {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Shape(${this.id})`;
    }
}
class Rectangle2 extends Shape2 {
    constructor(id, x, y, width, height) {
        super(id, x, y);
    }
    toString() {
        return `Rectangle > ${super.toString()}`;
    }
}
class Circle2 extends Shape2 {
    constructor(id, x, y, radius) {
        super(id, x, y);
    }
    toString() {
        return `Circle > ${super.toString()}`;
    }
}

let shape2 = new Shape2(1, 10, 20);
console.log(shape2);
let rectangle2 = new Rectangle2(2, 20, 30);
console.log(rectangle2);
let circle2 = new Circle2(3, 30, 40);
console.log(circle2);


console.log('%c • Static Members ', styleSub);
class Rectangle3 extends Shape2 {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
    static defaultRectangle() {
        return new Rectangle('default', 2, 2, 100, 100);
    }
}
class Circle3 extends Shape2 {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    static defaultCircle() {
        return new Circle('default', 4, 4, 100);
    }
}

let rectangle3 = Rectangle3.defaultRectangle();
console.log(`Rectangle data:`, rectangle3);
let circle3 = Circle3.defaultCircle();
console.log(`Circle data:`, circle3);

console.log('%c • Getter/Setter ', styleSub);
class Rectangle4 {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._width * this._height;
    }
};

var r = new Rectangle4(50, 20);
console.log('Compare rectangle.area === 1000:', r.area === 1000);
/* ********************************************************** */

/*  12. Symbol Type
    * Symbol Type
    * Global Symbols
*/

console.log('%c =>Symbol Type ', style);

console.log('%c • Symbol Type ', styleSub);

console.log('Symbol("foo"):', Symbol('foo'));
console.log('Symbol("foo") !== Symbol("foo"):', Symbol("foo") !== Symbol("foo"));

var foo1 = Symbol();
var bar1 = Symbol();
console.log('typeof foo1 === "symbol":', typeof foo1 === 'symbol');
console.log('typeof bar1 === "symbol":', typeof bar1 === 'symbol');

var obj = {};
obj[foo1] = "foo1";
obj[bar1] = "bar1";
console.log('Value obj:', obj);
console.log('Value Object.keys(obj):', Object.keys(obj));
console.log('Value Object.getOwnPropertyNames(obj):', Object.getOwnPropertyNames(obj));
console.log('Value Object.getOwnPropertySymbols(obj):', Object.getOwnPropertySymbols(obj));
console.log('Value obj["foo1"]:', obj['foo1']);
console.log('Value obj[foo1]:', obj[foo1]);


console.log('%c • Global Symbols ', styleSub);

console.log('Symbol.for("app.foo") === Symbol.for("app.foo"):', Symbol.for("app.foo") === Symbol.for("app.foo"));

foo1 = Symbol.for("app.foo");
bar1 = Symbol.for("app.bar");
console.log('Symbol.keyFor(foo) === "app.foo":', Symbol.keyFor(foo1) === "app.foo");
console.log('Symbol.keyFor(bar1) === "app.bar":', Symbol.keyFor(bar1) === "app.bar");
console.log('typeof foo1 === "symbol":', typeof foo1 === "symbol");
console.log('typeof bar1 === "symbol":', typeof bar1 === "symbol");

obj = {};
obj[foo1] = "foo1";
obj[bar1] = "bar1";
console.log('Value obj:', obj);
console.log('Value Object.keys(obj):', Object.keys(obj));
console.log('Value Object.getOwnPropertyNames(obj):', Object.getOwnPropertyNames(obj));
console.log('Value Object.getOwnPropertySymbols(obj):', Object.getOwnPropertySymbols(obj));
console.log('Value obj[foo1]:', obj[foo1]);

/* ********************************************************** */

/*  13. Iterators
    * Iterator & For-Of Operator
*/
console.log('%c => Iterators ', style);

console.log('%c • Iterator & For-Of Operator ', styleSub);
var fibonacci = {
    [Symbol.iterator]() {
        let pre = 0,
            cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {
                    done: false,
                    value: cur
                };
            }
        };
    }
}

for (var n of fibonacci) {
    if (n > 100)
        break;
    console.log('Current value fibonacci:', n);
}

/* ********************************************************** */

/*  14. Generators
    * Generator Function, Iterator Protocol
    * Generator Function, Direct Use
    * Generator Matching
    * Generator Control-Flow
    * Generator Methods
*/

console.log('%c => Generators ', style);

console.log('%c • Generator Function, Iterator Protocol ', styleSub);

fibonacci = {
    *[Symbol.iterator]() {
        let pre = 0,
            cur = 1;
        for (; ;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}
for (let n of fibonacci) {
    if (n > 100)
        break;
    console.log('Current value fibonacci:', n);
}

console.log('%c • Generator Function, Direct Use ', styleSub);

function* range(start, end, step) {
    while (start < end) {
        yield start;
        start += step;
    }
}

for (var i of range(0, 10, 2)) {
    console.log('Current value range:', i);
}

console.log('%c • Generator Matching ', styleSub);

var fibonacci = function* (numbers) {
    var pre = 0,
        cur = 1;
    while (numbers-- > 0) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
};

for (var n of fibonacci(10)) {
    console.log('Current value fibonacci:', n);
}

var numbers = [...fibonacci(10)];
console.log('Value numbers:', numbers);
var [n1, n2, n3, ...others] = fibonacci(10);

console.log('Values n1, n2, n3, others:', n1, n2, n3, others);

// console.log('%c • Generator Control-Flow ', styleSub);

async function getFile() {
    return (new Promise(function (resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', "./product.json");
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                resolve("File not Found");
            }
        };
        req.send();
    }));
}

getFile().then(response => { console.log('%c => Generators ', style); console.log('%c • Generator Control-Flow ', styleSub, JSON.parse(response)) });

console.log('%c • Generator Methods ', styleSub);

class Clz {
    *bar() {
        console.log('Hello bar');
    }
};
obj = {
    *foo() {
        console.log('Hello foo');
        yield 1;
        console.log('Bye foo');
        yield 2;
        return "finish!";
    }
};

let clz = new Clz();
console.log(`Clz bar:`, clz.bar().next());

obj3 = obj.foo();
console.log(`Obj.foo:`, obj3.next());
console.log(`Obj.foo:`, obj3.next());
console.log(`Obj.foo:`, obj3.next());

/* ********************************************************** */

/*  15. Map/Set & WeakMap/WeakSet
    * Set Data-Structure
    * Map Data-Structure
    * Weak-Link Data-Structures
*/

console.log('%c => Map/Set & WeakMap/WeakSet ', style);

console.log('%c • Set Data-Structure ', styleSub);

var s = new Set();
s.add('hello').add('goodbye').add('hello');
console.log('s.size === 2:', s.size === 2);
console.log('s.has("hello"):', s.has('hello') === true);
console.log(s);


console.log('%c • Map Data-Structure ', styleSub);

var m = new Map();
m.set('hello', 42);
m.set(s, 34);
console.log(`m.get(s) === 34:`, m.get(s) === 34);
console.log(`m.size === 2:`, m.size === 2);
for (var [key, val] of m.entries()) {
    console.log(`key:`, key, ` - val:`, val);
}
console.log(m);

console.log('%c • Weak-Link Data-Structures ', styleSub);
var isMarked = new WeakSet();
var attachedData = new WeakMap();

class Node {
    constructor(id) {
        this.id = id;
    }
    mark() {
        isMarked.add(this);
    }
    unmark() {
        isMarked.delete(this);
    }
    marked() {
        return isMarked.has(this);
    }
    set data(data) {
        attachedData.set(this, data);
    }
    get data() {
        return attachedData.get(this);
    }
}

var foo5 = new Node('foo');

console.log('Value foo5:', foo5);
foo5.mark();
foo5.data = "bar";
console.log('foo5.data === "data":', foo5.data === 'bar');
console.log('Value foo5:', foo5);
console.log('foo5 isMarked:', isMarked.has(foo5));
console.log('attached data foo5:', attachedData.has(foo5));
foo5 = null /* remove only reference to foo */
console.log('attached data foo5:', attachedData.has(foo5));
console.log('foo5 isMarked:', isMarked.has(foo5));


/* ********************************************************** */

/*  14. Typed Arrays
    * Typed Arrays
*/
console.log('%c =>Typed Arrays ', style);

console.log('%c • Typed Arrays ', styleSub);

class Example {
    constructor(buffer = new ArrayBuffer(24)) {
        this.buffer = buffer;
    }
    set buffer(buffer) {
        this._buffer = buffer;
        this._id = new Uint32Array(this._buffer, 0, 1);
        this._username = new Uint8Array(this._buffer, 4, 16);
        this._amountDue = new Float32Array(this._buffer, 20, 1);
    }
    get buffer() {
        return this._buffer;
    }
    set id(v) {
        this._id[0] = v;
    }
    get id() {
        return this._id[0];
    }
    set username(v) {
        this._username[0] = v;
    }
    get username() {
        return this._username[0];
    }
    set amountDue(v) {
        this._amountDue[0] = v;
    }
    get amountDue() {
        return this._amountDue[0];
    }
}

var example = new Example();
example.id = 7;
example.username = "John Doe";
example.amountDue = 42.0;
console.log('Value example.id:', example.id);
console.log('Value example.username:', example.username);
console.log('Value example.amountDue:', example.amountDue);


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
console.log('%c => New Built-In Methods ', style);

console.log('%c • Object Property Assignment ', styleSub);

var dst = {
    quux: 0
};
var src1 = {
    foo: 1,
    bar: 2
};
var src2 = {
    foo: 3,
    baz: 4
};
Object.assign(dst, src1, src2);
console.log("Value dst:", dst);


console.log('%c • Array Element Finding ', styleSub);


var find = [1, 3, 4, 2, 5].find(x => x > 3);
console.log("Find value x > 3:", find);

console.log('%c • String Repeating ', styleSub);

var repeat1 = '0'.repeat(4 * 2);
var repeat2 = 'foo'.repeat(1);
console.log("' '.repeat(4 * 2):", repeat1);
console.log("'foo'.repeat(3):", repeat2);


console.log('%c • String Searching ', styleSub);

console.log("'hello'.startsWith('ello', 1):", 'hello'.startsWith('ello', 1));
console.log("'hello'.endsWith('hell', 4):", 'hello'.endsWith('hell', 4));
console.log("'hello'.includes('ell'):", 'hello'.includes('ell'));
console.log("'hello'.includes('ell', 1):", 'hello'.includes('ell', 1));
console.log("'hello'.includes('ell', 2):", 'hello'.includes('ell', 2));

console.log('%c • Number Type Checking ', styleSub);

console.log("Number.isNaN(42):", Number.isNaN(42));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isFinite(-Infinity):", Number.isFinite(-Infinity));
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));
console.log("Number.isFinite(123):", Number.isFinite(123));

console.log('%c • Number Safety Checking ', styleSub);

var isSafety1 = Number.isSafeInteger(42);
var isSafety2 = Number.isSafeInteger(9007199254740992);
console.log('Number.isSafeInteger(42):', isSafety1);
console.log('Number.isSafeInteger(9007199254740992):', isSafety2);

console.log('%c • Number Comparison ', styleSub);

var num_comp1 = (0.1 + 0.2 === 0.3);
var num_comp2 = (Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
console.log('0.1 + 0.2 === 0.3:', num_comp1);
console.log('Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON:', num_comp2, Number.EPSILON);

console.log('%c • Number Truncation ', styleSub);

console.log('Math.trunc(42.7):', Math.trunc(42.7));
console.log('Math.trunc( 0.1):', Math.trunc(0.1));
console.log('Math.trunc(-0.1):', Math.trunc(-0.1));


console.log('%c • Number Sign Determination ', styleSub);

console.log('Math.sign(7):', Math.sign(7));
console.log('Math.sign(0):', Math.sign(0));
console.log('Math.sign(-0):', Math.sign(-0));
console.log('Math.sign(-7):', Math.sign(-7));
console.log('Math.sign(NaN):', Math.sign(NaN));



/* ********************************************************** */

/*  16. Promises
    * Promise Usage
    * Promise Combination
*/
console.log('%c => Promises ', style);

console.log('%c • Promise Usage ', styleSub);

function msgAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
        // reject("error");
    });
}

console.log(msgAfterTimeout('', 'Foo', 10));

console.log('%c • Promise Combination ', styleSub);

var fetchPromised = (name) => {
    return new Promise((resolve, reject) => {
        resolve(`Hi ${name}`);
        reject("error");
    });
}

console.log(Promise.all([
    fetchPromised('Foo'),
    fetchPromised('Bar'),
    fetchPromised('Baz')
]));

/* ********************************************************** */

/*  17. Meta-Programming
    * Proxying
    * Reflection
*/
console.log('%c => Meta-Programming ', style);

console.log('%c • Proxying ', styleSub);

var target = {
    foo: 'Welcome, foo'
};
var proxy = new Proxy(target, {
    get(receiver, name) {
        return name in receiver ? receiver[name] : `Hello, ${name}`;
    }
});
console.log('proxy.foo:', proxy.foo);
console.log('proxy.world:', proxy.world);

console.log('%c • Reflection ', styleSub);

var obj = {
    a: 1
};
Object.defineProperty(obj, "b", {
    value: 2
});
obj[Symbol("c")] = 3;
console.log('Reflect.ownKeys(obj):', Reflect.ownKeys(obj));


/* ********************************************************** */

/*  18. Internationalization & Localization
    * Collation
    * Number Formatting
    * Currency Formatting
    * Date/Time Formatting
*/
console.log('%c => Internationalization & Localization ', style);

console.log('%c • Collation ', styleSub);

var list = ['ä', 'a', 'z'];
var l10nDE = new Intl.Collator('de');
var l10nSV = new Intl.Collator('sv');
console.log(`l10nDE.compare('ä', 'z'):`, l10nDE.compare('ä', 'z'));
console.log(`l10nSV.compare('ä', 'z'):`, l10nSV.compare('ä', 'z'));
console.log(`list.sort(l10nDE.compare):`, list.sort(l10nDE.compare));
console.log(`list.sort(l10nSV.compare):`, list.sort(l10nSV.compare));


console.log('%c • Number Formatting ', styleSub);

var l10nEN = new Intl.NumberFormat('en-US');
var l10nDE = new Intl.NumberFormat('de-DE');
console.log(`Compare number format EN:`, l10nEN.format(1234567.89) === '1,234,567.89');
console.log(`Compare number format DE:`, l10nDE.format(1234567.89) === '1.234.567,89');


console.log('%c • Currency Formatting ', styleSub);

let l10nUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
let l10nGBP = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
});
let l10nEUR = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});
console.log('Compare currency format USD:', l10nUSD.format(100200300.40) === '$100,200,300.40');
console.log('Compare currency format GBP:', l10nGBP.format(100200300.40) === '£100,200,300.40');
console.log('Compare currency format EUR:', l10nEUR.format(100200300) === '100.200.300,40 €');


console.log('%c • Date/Time Formatting ', styleSub);


var l10nEN = new Intl.DateTimeFormat('en-US');
var l10nDE = new Intl.DateTimeFormat('de-DE');
console.log(`Compare date format EN:`, l10nEN.format(new Date('2017-01-02')) === '1/2/2017');
console.log(`Compare date format DE:`, l10nDE.format(new Date('2017-01-02')) === '2.1.2017');

