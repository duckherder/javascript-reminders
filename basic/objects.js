// objects can be seen as a collection of properties

simple_obj = Object();
console.log(Object.keys(simple_obj));

let person = {      // construction using object initializers
    name: 'Jack',
    age: 25
};

function Person(name, age) {        // Constructor function
    this.name = name;
    this.age = age;
}
let bob = new Person('bob', 95);    // Initialization using constructor function

let { age } = person;       // Creates a variable 'age' from object 'person.age'
console.log(age)

let keys = Object.keys(person)
console.log(keys);

console.log('age in person: ' + person.hasOwnProperty('age'));

// different ways to access properties
console.log(person.name);
console.log(person['age']);

// add a new property which could be an object
person.location = {street: 'high st', door: 23};
console.log(person);
console.log(person.location.door);

// you can delete object properties
delete person.age;                      // not recommended to delete array elements
console.log(person);
console.log('age in person: ' + person.hasOwnProperty('age'));
console.log(Object.getOwnPropertyNames(person));

for (var item in person) {
    console.log(item + ': ' + person[item]);
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
