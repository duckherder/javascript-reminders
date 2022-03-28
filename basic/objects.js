// objects can be seen as a collection of properties

simple_obj = Object();
console.log(Object.keys(simple_obj));

let jack = {      // construction using object initializers
    name: 'Jack',
    age: 25
};
console.log(jack);

let person_name = 'Tony';
let person_age = 25;
let tony = {person_name, person_age};   // create from existing variables
console.log(tony);                      // variable names will become the keys

function Person(name, age) {        // Constructor function
    this.name = name;
    this.age = age;
}
let bob = new Person('bob', 95);    // Initialization using constructor function
console.log(bob);

let { age } = jack;       // Creates a variable 'age' from object 'jack.age'
console.log(age)

let keys = Object.keys(jack)
console.log(keys);

console.log('age in person: ' + jack.hasOwnProperty('age'));

// different ways to access properties
console.log(jack.name);
console.log(jack['age']);

// add a new property which could be an object
jack.location = {street: 'high st', door: 23};
console.log(jack);
console.log(jack.location.door);

// you can delete object properties
delete jack.age;                      // not recommended to delete array elements
console.log(jack);
console.log('age in jack: ' + jack.hasOwnProperty('age'));
console.log(Object.getOwnPropertyNames(jack));

for (var item in jack) {
    console.log(item + ': ' + jack[item]);
}

console.log('Arrays....')
var a = new Array();        // object-like
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
console.log(a.length);

var a = ['dog', 'cat', 'hen'];      // more standard
a[100] = 'fox';
console.log(a.length); // 101 as length is the index of next highest
console.log(typeof a[90]);

console.log('for..in');
for (var index in a){
    console.log(index + ': ' + a[index]);
}

console.log('for..of');
for (var pet of a){
    console.log(pet);
}

console.log('foreach...');
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
    console.log(currentValue + ' : ' + array[index]);
});

var pets = ['dog', 'cat', 'hen'];
pets.push('duck');
pets.reverse();     // lots of methods like sorting, map, filter, every, slices etc...
small = pets.slice(1);
console.log(small);

// use commas to initialise undefined in array
var a = ['dog', , 'hen'];
console.log(a[1]);
console.log(a.length);
