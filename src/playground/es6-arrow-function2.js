// arguments object - no longer bound with arrow functions

// const add = function (a,b) {
//     console.log(arguments);
//     return a + b;
// }

const add = (a,b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 87));

//this keyword - no longer bound with arrow functions

const user = {
    name: 'Jayme',
    cities: ['Atlanta', 'New York', 'Austin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    },
}

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())