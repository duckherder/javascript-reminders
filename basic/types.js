// See ECMAScript - the standardisation of Javascript aka ES, hence ESLint

console.log('Numbers and integers....');
let my_int_number = 1;
let my_real_number = 3.2;
console.log(typeof my_int_number);
console.log(typeof my_real_number);

// Numbers are double precision 64-bit (8 bytes)
// However implementations like Google V8 engine in node.js/Chrome
// may use 4 byte SMall Integers (SMIs) for storage internally and
// convert to/from as required when operations performed on value
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

// BigInt - Like Python 3 integer these can be of any size
// only restricted by amount of memory available (so basically unlimited)
// Use suffix 'n' to indicate a bigint. MAX_SAFE_INTEGER is the number
// after which integers will definitely be double precision approximations
console.log(Number.MAX_SAFE_INTEGER);
const x = BigInt(Number.MAX_SAFE_INTEGER) + 1234n;
console.log(typeof x);
const y = Number.MAX_SAFE_INTEGER + 1234;
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));   // true
console.log(Number.isSafeInteger(y));   // false

// Strings
console.log('Strings....');
var mystring = 'hello';
console.log(typeof mystring);

// Booleans
console.log('Booleans....');
a = "a" === "b";
console.log(typeof a);
console.log(Boolean(''));    // empty strings are false

// Values that are declared but not given a value are undefined type
console.log('Undefined....');
var my_var;
console.log(typeof my_var);   // undefined

// Null is empty object
console.log('Null....')
var null_var = null;
console.log(typeof null_var);

// Infinity is a number
console.log('Infinity....');
inf = 42 / 0;
console.log(inf);           // Infinity
console.log(typeof inf);    // Number

var my_var;                 // Original type specifier, function and global scope
let other_var;              // Usually block scope
const a_const = 5;          // Immutable type

// Symbols - can be used as keys in objects along with strings
console.log('Symbols....');
my_sym = Symbol('really');
console.log(typeof my_sym);

// Objects
console.log('Objects....');
my_obj = Object();
console.log(typeof my_obj);

// Equality == will perform type coercion (also !=)
console.log('Equality....');
console.log(123 == '123'); // true
console.log(1 == true); // true

// To avoid type coercion, use the triple-equals operator (also !==)
console.log(123 === '123'); // false
console.log(1 === true);    // false

// Javascript is dynamically typed so below is ok
var my_var = 23;
console.log(my_var);
my_var = 'hello!';
console.log(my_var);

// alternative variable assignment
let [my_name, age] = ['bob', 25];
console.log(my_name);
console.log(age);

// chaining of assignments is not recommended
myfunc = function my_silly_func() {
    let zz = yy = xx = 15;  // let only refers to zz
}
myfunc();
//console.log(zz);    // reference error
console.log(yy);    // global variable - not expected
console.log(xx);    // global variable - not expected
