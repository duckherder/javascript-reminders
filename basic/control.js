for (var i = 0; i < 5; i++) {
    console.log('loop ' + i);
}
  
var pet = 'kittens';
if (pet === 'puppies') {
    pet += ' woof';
} else if (pet === 'kittens') {
    pet += ' meow';
} else {
    pet += '!';
}
console.log(pet);

var i = 0;
while(i < 3) {      // do...while also supported
    console.log('while ' + i);
    i++;
}

// tenary supported#
var age = 21;
var allowed = (age > 18) ? 'yes' : 'no';

// switch statements supprted
var action = 'draw';
switch (action) {
    case 'draw':
        console.log('drawing');
        break;
    case 'eat':
        console.log('eating');
        break;
    default:
        break;      // C-style break and continues are also supported in JS
}
