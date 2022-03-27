var my_global_variable = 'global';      // global scope - variable of the global object

function print_me(print_flag){
    if (print_flag) {
        var x = 5;
        let y = 6;      // let is block scope
        const z = 7;    // const is also block scope and read-only
    }
    console.log(x);  // var is function scope
    //console.log(y);   // This will generate reference error as out of scope
}

const my_obj = {'name': 'bob'};     // object values of a const object are modifiable
my_obj.name = 'tim';
console.log(my_obj);        // tim

print_me(true);
print_me(false);
//console.log(x);  // This will generate a reference error as out of scope

console.log(x === undefined);   // true
var x = 3;                      // declared after used - 'hoisting'. variable is
                                // hoisted to the top of the file

var my_var = 'global';

(function() {
  console.log(my_var);   // undefined
  var my_var = 'local';
  console.log(my_var);  // prints local
})();

console.log(my_var);    // prints global

foo();

function foo() {        // function hoisting
  console.log('bar');
}

console.log(Object.getOwnPropertyNames(this));
