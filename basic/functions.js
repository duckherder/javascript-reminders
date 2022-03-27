// functions are objects
function Person(name, age) {
    this.name = name;           // this refers to current object
    this.age = age;
}

// Define an object
var you = new Person('Bob', 24);  // We are creating a new person named "You" aged 24.
console.log(`Hello, name is ${you.name} and I am ${you.age} years old!`);

function sum(x, y) {        // parameters are just guidelines, there is no enforcing
    return x + y;           // any extra parameters will be ignored
}

console.log(sum());   // parameters will be undefined so will return NaN

function print_me(my_str) {     // returns undefined if nothing specified to be returned
    console.log(arguments);     // prints all the arguments sent to function..arguments is keyword
    console.log(typeof arguments);     // an object
    console.log(arguments.callee);      // 'print_me'
    console.log(my_str);
}

print_me('hello');

function sum_all_args(...args) {            // Rest parameter...
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum;
}

function modulo(x, y = 2) { // default parameters supported
    return x % y;
}
console.log('modulo returns ' + modulo(3));

function mixed_function(x, y, ...args)      // Rest parameters always come last
{
    return x + y + args.length;
}

// these will all produce the same result
console.log(sum_all_args(2,3,4,5,6));
console.log(sum_all_args(...[2,3,4,5,6]));    // can use spread operator do unpack
console.log(sum_all_args.apply(null, [2,3,4,5,6]));

let myfunc = function subtract(x ,y) {      // create function objects
    return x - y;
}
console.log(typeof myfunc);
console.log(myfunc(4,3));

let multiplier = function(x ,y) {      // anonymous function
    return x * y;
}
console.log(typeof multiplier);
console.log(multiplier(4,3));

// all these do the same thing...
iife = (function(x,y) { return x % y; })(4,3);  // immediately invoked function expression
console.log(iife);
iife = (function modulo(x,y) { return x % y; })(4,3);
console.log(iife);
iife = ((x,y) => { return x % y; })(4,3);   // arrow operator, same as function()
console.log(iife);
iife = ((x,y) => x % y)(4,3);   // remove return and braces as automatically implied
console.log(iife);

// you can modify an object in a function
my_obj = Object();
function my_func(obj)
{
    obj.calls = 5;
    console.log('in my_func');
}
my_func(my_obj);
console.log(my_obj.calls);

// Functions can be nested
function compute_stuff() {
    var num1 = 10;   // function scoped variables
    var num2 = 3;
  
    function multiply() {
      return num1 * num2;
    }
  
    return multiply();
}

console.log(compute_stuff());
