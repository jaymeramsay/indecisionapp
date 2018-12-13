'use strict';

// arguments object - no longer bound with arrow functions

// const add = function (a,b) {
//     console.log(arguments);
//     return a + b;
// }

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 87));

//this keyword - no longer bound with arrow functions

var user = {
    name: 'Jayme',
    cities: ['Atlanta', 'New York', 'Austin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!';
        });
    }
};

console.log(user.printPlacesLived());

//challenge area

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
