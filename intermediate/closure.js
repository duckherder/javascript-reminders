function multiplier() {
    const multiple = 2;
    function do_multiplication(val) {
      return multiple * val;
    }
    return do_multiplication;
}
doubler = multiplier(); // Returns function that encloses variables like 'multiple'
console.log(doubler(5));    // 10

var person = function(drinker, age) {
    var is_allowed = age > 18 ? true : false;  // drinker, age and is_allowed closed
    ret_obj = {buy_drink: function() { return is_allowed; },  // returns an object with mutiple methods
              get_drinker: function() { return drinker;} };
    return ret_obj;
}

dave = person('dave', 24);
console.log(dave.get_drinker());
console.log(dave.buy_drink());

sam = person('sam', 16);
console.log(sam.get_drinker());
console.log(sam.buy_drink());
