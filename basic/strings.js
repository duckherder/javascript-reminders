// strings are sequences of UTF-16 unicode characters
var my_string = 'hello';                // Strings are immutable once created
var other_string = String("hello\nbob's here");    // can include escape chars
console.log(other_string);

my_string = my_string + ' bob';   // You can create a new string by concatenation
console.log(my_string);
console.log(my_string.substring(1));

var my_int = Number.parseInt('10.99');
console.log(my_int);        // 10
console.log(typeof my_int);
var my_num = Number.parseFloat('10.99');
console.log(my_num);        //10.99
console.log(typeof my_num);
var my_num = Number.parseFloat('abc');
console.log(my_num);
console.log(typeof my_num);  // NaN

console.log('hello'.length); // 5 - note JS creates/discards String object when using methods on literal
console.log('hello'.charAt(0)); // "h"
console.log('hello, world'.replace('world', 'mars')); // "hello, mars"
console.log('hello'.toUpperCase()); // "HELLO"

console.log('concat' + 'enation');

// String interpolation (templates)
var my_name = 'Bob', my_time = 'today';
var my_string = `Hello ${my_name}, how are you ${my_time}?`;
console.log(my_string);
